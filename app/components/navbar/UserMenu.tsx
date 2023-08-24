'use client';
import { useState, useCallback } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';

interface UserMenuProps {
  currentUser: SafeUser | null | undefined;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen(value => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
          "
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px]
          border-neutral-200
          flex
          flex-row
          items-center
          gap-3
          rounded-full
          cursor-pointer
          hover:shadow-md
          transition
        "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="
          absolute
          rounded-xl
          shadow-md
          w-[40vw]
          md:w-3/4
          bg-white
          overflow-hidden
          right-0
          top-12
          text-sm
        "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label="旅行" />
                <MenuItem onClick={() => {}} label="收藏" />
                <MenuItem onClick={() => {}} label="预定" />
                <MenuItem onClick={() => {}} label="财产" />
                <MenuItem onClick={() => {}} label="Airbnb my home" />
                <hr />
                <MenuItem onClick={() => signOut()} label="登出" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="登录" />
                <MenuItem onClick={registerModal.onOpen} label="注册" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;