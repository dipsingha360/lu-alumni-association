const Home = () => {
  return (
    <div className="home container mx-auto py-10">
      {/* header  */}
      <header className="header">
        <div className="hero grid grid-cols-3 bg-indigo-800 rounded-lg text-white ">
          <img
            src="https://scontent.fdac138-1.fna.fbcdn.net/v/t31.18172-8/25073508_1293483224131109_1607978397883420901_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHqGxkaelYMqbYarnuA9DxbJFNm-g2QTlQkU2b6DZBOVLPSXBR_DN9qJY_1L2efgxG30wpKhPt5o6YCgQN9SiG1&_nc_ohc=Zi7J9nzXev8AX-YGlAu&_nc_ht=scontent.fdac138-1.fna&oh=00_AfAVUOkmlqzVfDOmo8Hc_jGD7GJV6O13-cLkOakaFm7UhQ&oe=63FC576C"
            alt=""
            className="img col-span-2 p-5 rounded-2xl object-cover "
          />

          <div className="details p-5 flex flex-col gap-3 bg-indigo-700 rounded-lg">
            <h2 className="title text-xl font-semibold uppercase">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="sub-title">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus, eius.
            </p>
            <p className="description text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              vitae officia quidem sequi, accusantium cum voluptatem minima
              aspernatur rem consequatur.
            </p>
          </div>
        </div>
      </header>

      {/* blog and events  */}
      <section className="flex justify-between gap-3  py-10">
        <div className="blogs ">
          <div className="blog flex justify-between items-center border border-indigo-100 p-2 rounded-lg w-auto  ">
            <img
              src="https://www.reliablesoft.net/wp-content/uploads/2019/12/free-images-for-blogs.jpg"
              alt=""
              className="h-28 w-52 px rounded object-cover "
            />
            <div className="details flex flex-col gap-1 h-14 w-48 pl-2">
              <h2 className="title text-lg font-medium">Demo Title</h2>
              <p className="description overflow-hidden text-xs ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              </p>
            </div>
          </div>
        </div>
        <div className="events border rounded-lg">
          <div className="p-3">
            <h2 className="main-title text-center font-semibold text-xl mb-5">
              Lorem ipsum dolor sit.
            </h2>

            <div className="event flex justify-center my-5 item gap-2">
              <div className="date  w-20 h-20 flex flex-col items-center justify-center bg-indigo-500 rounded">
                <p className="text-xl text-indigo-50">20</p>
                <p className="text-xl text-indigo-50">Jan</p>
              </div>
              <div className="details">
                <p className="title font-medium text-lg">Lorem, ipsum dolor.</p>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>

            <div className="event flex justify-center my-5 item gap-2">
              <div className="date  w-20 h-20 flex flex-col items-center justify-center bg-indigo-500 rounded">
                <p className="text-xl text-indigo-50">20</p>
                <p className="text-xl text-indigo-50">Jan</p>
              </div>
              <div className="details">
                <p className="title font-medium text-lg">Lorem, ipsum dolor.</p>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>

            <div className="event flex justify-center my-5 item gap-2">
              <div className="date  w-20 h-20 flex flex-col items-center justify-center bg-indigo-500 rounded">
                <p className="text-xl text-indigo-50">20</p>
                <p className="text-xl text-indigo-50">Jan</p>
              </div>
              <div className="details">
                <p className="title font-medium text-lg">Lorem, ipsum dolor.</p>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
