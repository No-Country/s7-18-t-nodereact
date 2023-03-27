const DrawerMenu = () => {
  return (
    <div className='drawer drawer-mobile'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />

      <div className='drawer-side border-r-2'>
        <label htmlFor='my-drawer-2' className='drawer-overlay'></label>

        <ul className='menu w-80 text-base-content bg-base-100 p-0'>
          {/* <!-- Sidebar content here --> */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default DrawerMenu;
