import Container from '../../../components/Container';

const Subscribe = () => {
    return (
      <div className="mt-28 bg-accent_2">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 py-16">
            <h3 className="font-signika text-3xl text-white text-center">
              Subscribe to our Newsletter
            </h3>
            <form action="" className="relative lg:w-[70%]">
              <input
                type="email"
                className="bg-accent_2 border px-6 py-2 w-full rounded-full text-white focus:outline outline-white"
              />
              <button className="uppercase font-semibold bg-white text-accent_2 rounded-e-full px-6 py-2 absolute right-0 bottom-0 top-0">
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </div>
    );
};

export default Subscribe;