const Home = () => {
  return (
    <div className="home container mx-auto py-10">
      <header className="header">
        <div className="hero grid grid-cols-3 bg-indigo-800 rounded-lg text-white">
          <img
            src="https://scontent.fdac138-1.fna.fbcdn.net/v/t31.18172-8/25073508_1293483224131109_1607978397883420901_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHqGxkaelYMqbYarnuA9DxbJFNm-g2QTlQkU2b6DZBOVLPSXBR_DN9qJY_1L2efgxG30wpKhPt5o6YCgQN9SiG1&_nc_ohc=Zi7J9nzXev8AX-YGlAu&_nc_ht=scontent.fdac138-1.fna&oh=00_AfAVUOkmlqzVfDOmo8Hc_jGD7GJV6O13-cLkOakaFm7UhQ&oe=63FC576C"
            alt=""
            className="col-span-2 p-5 rounded-2xl"
          />
          <div className="details p-5 flex flex-col gap-3 bg-indigo-700 rounded-lg">
            <h2 className="title text-xl font-semibold uppercase">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="sub-title">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus, eius.
            </p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              vitae officia quidem sequi, accusantium cum voluptatem minima
              aspernatur rem consequatur.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
