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
    description: '这里处在一个美丽的乡村!',
  },
  {
    label: '泳池',
    icon: TbPool,
    description: '此处有一个很大的泳池!',
  },
  {
    label: '岛屿',
    icon: GiIsland,
    description: '这个地方在岛屿上!',
  },
  {
    label: '湖泊',
    icon: GiBoatFishing,
    description: '此处附近有一个美丽的湖泊!',
  },
  {
    label: '滑雪',
    icon: FaSkiing,
    description: '这里可是滑雪的好地方!',
  },
  {
    label: '城堡',
    icon: GiCastle,
    description: '这里有一个大大的城堡!',
  },
  {
    label: '洞穴',
    icon: GiCaveEntrance,
    description: '此处房屋在洞穴里面!',
  },
  {
    label: '露营',
    icon: GiForestCamp,
    description: '此处是露营的最佳选择!',
  },
  {
    label: '北极',
    icon: BsSnow,
    description: '这里是北极,快去找🐧吧(bushi)!',
  },
  {
    label: '沙漠',
    icon: GiCactus,
    description: '此处是一个很大的沙漠!',
  },
  {
    label: '农场',
    icon: GiBarn,
    description: '这里是一片农场!',
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: '这里很贵!!!',
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();

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
