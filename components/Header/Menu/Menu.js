import React, { useEffect } from 'react';
import { MENULINKS } from '../../../constants';

const Menu = () => {
  useEffect(() => {
    const anchorNodes = document.querySelectorAll('a[href^="#"]');
    anchorNodes.forEach((el) => {
      el.addEventListener('click', () => {
        const checkbox = document.querySelector('.checkbox-toggle');
        checkbox.checked = false;
      });
    });
  }, []);

  return (
    <div className="menu fixed top-0 left-0 w-full h-full invisible pointer-events-none flex items-center justify-center">
      <div className="flex-none flex items-center justify-center h-full">
        {' '}
        {/* Tambahkan h-full */}
        <div className="text-center opacity-0 overflow-y-auto overflow-x-hidden flex flex-1 justify-center items-center h-full">
          {' '}
          {/* Ubah max-h-screen ke h-screen dan flex-none ke flex-1 */}
          <ul className="list-none py-1 m-0 block">
            {MENULINKS.map((el) => (
              <li className="p-0 m-4 text-2xl block" key={el.name}>
                {' '}
                {/* Ubah margin dari m-6 ke m-4 */}
                <a className="link relative inline font-mono font-bold text-4xl duration-300 hover:no-underline" href={`#${el.ref}`}>
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
