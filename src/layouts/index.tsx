import { Link, Outlet } from 'umi';
import  './index.less';

export default function Layout() {
  return (
    <div className="">
      <Outlet />
    </div>
  );
}
