import { Switch } from '@headlessui/react';

interface Props {
  enabled: boolean;
  setEnabled: (val: boolean) => void;
}
const SwitchItem = ({ enabled, setEnabled }: Props) => {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-[#ff8c005b]' : 'bg-gray-200'
      } relative inline-flex h-[14px] w-[34px] items-center rounded-full`}
    >
      <span className='sr-only'>Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-4 bg-[#FF8C00]' : 'translate-x-0 bg-gray-300 '
        } inline-block h-[20px] w-[20px] transform rounded-full transition ease-in-out duration-200`}
      />
    </Switch>
  );
};
export default SwitchItem;
