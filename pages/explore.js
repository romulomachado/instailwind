import Header from '../components/Header';

export default function Explore() {
  return (
    <div>
      <Header>
        <input
          autocapitalize='none'
          autocomplete='off'
          placeholder='Search'
          spellcheck='true'
          type='search'
          value=''
          className='w-full py-3 text-sm text-center placeholder-gray-500 border rounded-md outline-none'
        />
      </Header>
      <p>Explore</p>
    </div>
  );
}
