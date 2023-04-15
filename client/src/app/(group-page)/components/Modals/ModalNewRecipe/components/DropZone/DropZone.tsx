import { useEffect, useRef } from 'react';
import { Options, Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import { TrashIcon } from '@/icons';

interface Props {
  files: File[];
  setFiles: (files: File[]) => void;
}

const DropZone = ({ files, setFiles }: Props) => {
  const mainRef = useRef<Splide>();
  const thumbsRef = useRef<Splide>();

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, [files]);

  const mainOptions: Options = {
    pagination: false,
  };

  const thumbsOptions: Options = {
    type: 'slide',
    rewind: true,
    pagination: false,
    fixedWidth: 90,
    fixedHeight: 70,
    //cover: true,
    isNavigation: true,
    paginationKeyboard: true,
    wheel: true,
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    let file = e?.target?.files;

    if (file?.length) {
      for (let i = 0; i < file.length; i++) {
        const fileType = file[i]['type'];
        const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
        if (validImageTypes.includes(fileType)) {
          //@ts-ignore
          setFiles((prev) => [...prev, file![i]]);
        }
      }
    }
  };

  const removeImage = (i: string) => {
    setFiles(files.filter((x) => x.name !== i));
  };

  const renderSlides = (isMain: boolean) =>
    files.map((file) => (
      <SplideSlide key={file.name} className='relative w-full h-full'>
        {isMain && (
          <button
            className='btn btn-circle btn-outline glass absolute right-3 top-3 z-30 text-white hover:text-red-500'
            onClick={() => removeImage(file.name)}
          >
            <TrashIcon />
          </button>
        )}
        <Image
          width={800}
          height={800}
          className='h-full w-full object-contain object-center'
          src={URL.createObjectURL(file)}
          alt={`image ${file.name}`}
        />
      </SplideSlide>
    ));

  return (
    <>
      <div className='h-full w-full overflow-hidden cursor-pointer bg-transparent relative'>
        <input
          type='file'
          onChange={handleFile}
          className={`opacity-0 z-20 cursor-pointer absolute ${
            files.length ? 'h-[80%] w-[80%] left-16' : 'h-full w-full left-0'
          }  top-0`}
          multiple={true}
          name='files[]'
        />
        <div className='absolute top-left w-full h-full flex flex-col justify-between'>
          {files.length ? (
            <>
              <Splide
                //@ts-ignore
                ref={mainRef}
                options={mainOptions}
                draggable
                aria-label='My Favorite Images'
                className='bg-base-200 w-full h-full overflow-hidden flex flex-col justify-center items-center'
              >
                {renderSlides(true)}
              </Splide>
              <Splide
                //@ts-ignore
                ref={thumbsRef}
                options={thumbsOptions}
                className='flex justify-center items-center bg-base-200'
                aria-label='The carousel with thumbnails. Selecting a thumbnail will change the main carousel'
              >
                {renderSlides(false)}
              </Splide>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default DropZone;
