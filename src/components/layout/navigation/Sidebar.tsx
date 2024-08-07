import { cn } from '@/lib/utils';
import { ChevronLeft, Landmark } from 'lucide-react';
import SidebarLinks from '@/components/layout/navigation/SidebarLinks'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store/state";
import { toggleSidebar } from '@/store/layout';
import { AppDispatch } from '@/store';

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const { open } = useSelector((state: RootState) => state.layout.sidebar);
  const dispatch = useDispatch<AppDispatch>();

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <aside
      className={cn(
        `relative hidden h-100 flex-none border-r bg-card transition-[width] duration-500 md:block`,
        !open ? 'w-72' : 'w-[72px]',
        className
      )}
    >
      <div className="hidden p-5 pt-10 lg:block">
        <a
          href={'https://finance-react-filipebsmonteiro.vercel.app'}
          target="_blank"
        >
          <Landmark />
        </a>
      </div>
      <ChevronLeft
        className={cn(
          'absolute -right-3 top-10 z-50  cursor-pointer rounded-full border bg-background text-3xl text-foreground',
          open && 'rotate-180'
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">
            <SidebarLinks />
          </div>
        </div>
      </div>
    </aside>
  );
}