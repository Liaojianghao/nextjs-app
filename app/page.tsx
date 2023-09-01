export const dynamic = 'force-dynamic';

import Container from './components/Container';
import ListingCard from './components/listings/ListingCard';
import EmptyState from './components/EmptyState';

import getCurrentUser from './actions/getCurrentUser';
import getListings, { IListingsParams } from '@/app/actions/getListings';
import ClientOnly from './components/ClientOnly';

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <Container>
        <div
          className="
        pt-24
        grid
        grid-cols-1
        sm:gird-cols-2
        md:gird-cols-3
        lg:gird-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
      "
        >
          {listings.map((listing: any) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
