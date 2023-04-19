import { DrawerMenuLeft, Header, ModalNewRecipe, ModalSearch, SidebarFollow, SidebarUser } from './components';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body>
        <Header />
        <div className='grid grid-cols-12'>
          <div className='hidden border-r-2 lg:block lg:col-span-3 xl:col-span-2 h-[calc(100vh-64px)] w-full'>
            <SidebarUser />
          </div>
          <div className='col-span-12 lg:col-span-6 xl:col-span-8 h-[calc(100vh-64px)] overflow-y-auto'>{children}</div>
          <div className='hidden border-l-2 lg:block lg:col-span-3 xl:col-span-2 h-[calc(100vh-64px)]'>
            <SidebarFollow />
          </div>
        </div>
        <ModalSearch />
        <DrawerMenuLeft />
        <ModalNewRecipe />
      </body>
    </html>
  );
}
