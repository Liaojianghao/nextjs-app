'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from '../CategoryBox';
import Container from '../Container';

export const categories = [
  {
    label: '沙滩',
    icon: TbBeach,
    description: '此处房屋靠近沙滩',
  },
  {
    label: '风车小屋',
    icon: GiWindmill,
    description: '此处房屋附近有风车',
  },
  {
    label: '现代',
    icon: MdOutlineVilla,
    description: '这是现代房屋',
  },
  {
    label: '乡村',
    icon: TbMountain,
    description: 'This property is in the countryside!',
  },
  {
    label: '泳池',
    icon: TbPool,
    description: 'This is property has a beautiful pool!',
  },
  {
    label: '岛屿',
    icon: GiIsland,
    description: 'This property is on an island!',
  },
  {
    label: '湖泊',
    icon: GiBoatFishing,
    description: 'This property is near a lake!',
  },
  {
    label: '滑雪',
    icon: FaSkiing,
    description: 'This property has skiing activies!',
  },
  {
    label: '城堡',
    icon: GiCastle,
    description: 'This property is an ancient castle!',
  },
  {
    label: '山脉',
    icon: GiCaveEntrance,
    description: 'This property is in a spooky cave!',
  },
  {
    label: '露营',
    icon: GiForestCamp,
    description: 'This property offers camping activities!',
  },
  {
    label: '北极',
    icon: BsSnow,
    description: 'This property is in arctic environment!',
  },
  {
    label: '沙漠',
    icon: GiCactus,
    description: 'This property is in the desert!',
  },
  {
    label: '农场',
    icon: GiBarn,
    description: 'This property is in a barn!',
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'This property is brand new and luxurious!',
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  //我们只想再index页面看到这些cate
  const isManiPage = pathname === '/';

  if (!isManiPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
      pt-4
      flex
      flex-row
      items-center
      justify-between
      overflow-x-auto
      "
      >
        {categories.map(item => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          ></CategoryBox>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
