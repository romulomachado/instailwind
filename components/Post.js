import Image from 'next/image';

export default function Post({
  profileImageUrl,
  username,
  location,
  imageUrl,
}) {
  return (
    <div>
      <div className='flex content-around p-4'>
        <Image
          src={profileImageUrl}
          width={40}
          height={40}
          className='rounded-full'
        />
        <div className='flex flex-col justify-center flex-1 ml-4'>
          <h2 className='mb-0 text-sm font-bold'>{username}</h2>
          <p className='mt-0 text-xs'>{location}</p>
        </div>
        <div className='flex items-center'>
          <MoreOptionsIcon />
        </div>
      </div>

      <Image src={imageUrl} width={800} height={800} />
    </div>
  );
}

const MoreOptionsIcon = () => (
  <svg
    aria-label='More options'
    fill='#262626'
    height='16'
    viewBox='0 0 48 48'
    width='16'
  >
    <circle
      clip-rule='evenodd'
      cx='8'
      cy='24'
      fill-rule='evenodd'
      r='4.5'
    ></circle>
    <circle
      clip-rule='evenodd'
      cx='24'
      cy='24'
      fill-rule='evenodd'
      r='4.5'
    ></circle>
    <circle
      clip-rule='evenodd'
      cx='40'
      cy='24'
      fill-rule='evenodd'
      r='4.5'
    ></circle>
  </svg>
);
