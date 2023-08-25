'use client';
import AvatarJpg from '../../public/images/placeholder.jpg';
import Image from 'next/image';

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={src || AvatarJpg}
    />
  );
};

export default Avatar;
