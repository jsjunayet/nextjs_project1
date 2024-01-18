

const Blog = () => {


  return (
    <div>
      <p>This is the Blog</p>
      <form action={formhandle}>
        <input className='bg-black text-white mx-5' type='email' name='email' />
        <input className='bg-black text-white mx-5' type='text' name='name' />
        <button className='bg-black text-white px-4 py-2 rounded' type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Blog;
