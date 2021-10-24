import React from "react";

function Header() {
  return (
    <div class="flex justify-evenly bg-gray-100">
      <img
        class="flex w-30 h-20 m-2"
        src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
        alt="Wild Code School logo"
      />
      <h1 class="flex text-xl font-medium text-black m-9">Les Argonautes</h1>
    </div>
  );
}

export default Header;
