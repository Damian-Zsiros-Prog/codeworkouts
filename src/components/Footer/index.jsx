import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className=' bg-blue-600 rounded-lg shadow m-4 dark:bg-blue-800'>
        <div className='w-full text-center mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between'>
          <span className='text-sm text-white sm:text-center '>
            © 2023{' '}
            <a href='https://flowbite.com/' className='hover:underline'>
              Damian Zsiros
            </a>
            . All Rights Reserved.
          </span>
          <ul className='text-center flex sm:justify-center flex-wrap items-center mt-3 text-sm text-white dark:text-gray-500 sm:mt-0'>
            <li>
              <a
                href='https://github.com/Damian-Zsiros-Prog'
                target='_blank'
                rel='noopener noreferrer'
                className='mr-4 hover:underline md:mr-6 '
              >
                Github
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/damian-zsiros-gonzalez/'
                target='_blank'
                rel='noopener noreferrer'
                className='mr-4 hover:underline md:mr-6'
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer
