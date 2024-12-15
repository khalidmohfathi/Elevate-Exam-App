import { signIn } from 'next-auth/react';
import React from 'react';

const SignInWith = () => {
    return (
        <div>
            <div className="">
          <p className="PPPPP">Or Continue with</p>
          <div className="flex justify-between container">
            <div
              className=" shadow-lg hover:cursor-pointer flex justify-center items-center rounded-lg w-[50px] h-[50px]"
              onClick={() => {
                signIn("google", {
                  callbackUrl: "/",
                });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.3161 12.2679C23.3161 11.432 23.241 10.6283 23.1017 9.8568H12.0001V14.4164H18.3439C18.0706 15.8899 17.2401 17.1383 15.9917 17.9741V20.9317H19.8012C22.0302 18.8796 23.3161 15.8577 23.3161 12.2679Z"
                  fill="#4285F4"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.9999 23.7873C15.1826 23.7873 17.8508 22.7318 19.8011 20.9315L15.9916 17.9739C14.9361 18.6812 13.5859 19.0991 11.9999 19.0991C8.92982 19.0991 6.33121 17.0256 5.40428 14.2394H1.46619V17.2935C3.40577 21.1458 7.39208 23.7873 11.9999 23.7873Z"
                  fill="#34A853"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.40438 14.2397C5.16863 13.5324 5.03468 12.777 5.03468 12C5.03468 11.2231 5.16863 10.4677 5.40438 9.76042V6.70639H1.46629C0.66795 8.2977 0.212524 10.098 0.212524 12C0.212524 13.9021 0.66795 15.7024 1.46629 17.2937L5.40438 14.2397Z"
                  fill="#FBBC05"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.9999 4.9007C13.7305 4.9007 15.2844 5.49544 16.506 6.66347L19.8868 3.2826C17.8455 1.38053 15.1772 0.212494 11.9999 0.212494C7.39208 0.212494 3.40577 2.85397 1.46619 6.70633L5.40428 9.76037C6.33121 6.97423 8.92982 4.9007 11.9999 4.9007Z"
                  fill="#EA4335"
                />
              </svg>
            </div>
            <div
              className="shadow-lg hover:cursor-pointer flex justify-center items-center rounded-lg w-[50px] h-[50px]"
              onClick={() => {
                signIn("facebook", {
                  callbackUrl: "/",
                });
              }}
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.8446 12C23.8446 5.48998 18.5672 0.212545 12.0571 0.212545C5.54703 0.212545 0.269592 5.48998 0.269592 12C0.269592 17.8835 4.58011 22.7601 10.2153 23.6443V15.4074H7.22238V12H10.2153V9.40311C10.2153 6.44887 11.9751 4.81704 14.6676 4.81704C15.9573 4.81704 17.3062 5.04726 17.3062 5.04726V7.94809H15.8198C14.3555 7.94809 13.8989 8.85672 13.8989 9.7889V12H17.1681L16.6455 15.4074H13.8989V23.6443C19.5341 22.7601 23.8446 17.8835 23.8446 12Z"
                  fill="#1877F2"
                />
              </svg>
            </div>
            <div
              className="shadow-lg hover:cursor-pointer flex justify-center items-center rounded-lg w-[50px] h-[50px]"
              onClick={() => {
                signIn("github", {
                  callbackUrl: "/",
                });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 48 48"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="invisible_box" data-name="invisible box">
                    <rect width="48" height="48" fill="none" />
                    <rect width="48" height="48" fill="none" />
                  </g>
                  <g id="icons_Q2" data-name="icons Q2">
                    <path d="M24,1.9a21.6,21.6,0,0,0-6.8,42.2c1,.2,1.8-.9,1.8-1.8V39.4c-6,1.3-7.9-2.9-7.9-2.9a6.5,6.5,0,0,0-2.2-3.2C6.9,31.9,9,32,9,32a4.3,4.3,0,0,1,3.3,2c1.7,2.9,5.5,2.6,6.7,2.1a5.4,5.4,0,0,1,.5-2.9C12.7,32,9,28,9,22.6A10.7,10.7,0,0,1,11.9,15a6.2,6.2,0,0,1,.3-6.4,8.9,8.9,0,0,1,6.4,2.9,15.1,15.1,0,0,1,5.4-.8,17.1,17.1,0,0,1,5.4.7,9,9,0,0,1,6.4-2.8,6.5,6.5,0,0,1,.4,6.4A10.7,10.7,0,0,1,39,22.6C39,28,35.3,32,28.5,33.2a5.4,5.4,0,0,1,.5,2.9v6.2a1.8,1.8,0,0,0,1.9,1.8A21.7,21.7,0,0,0,24,1.9Z" />
                  </g>
                </g>
              </svg>
            </div>
            <div
              className="shadow-lg hover:cursor-pointer flex justify-center items-center rounded-lg w-[50px] h-[50px]"
              onClick={() => {
                signIn("instagram", {
                  callbackUrl: "/",
                });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 2500 2500"
              >
                <defs>
                  <radialGradient
                    id="0"
                    cx="332.14"
                    cy="2511.81"
                    r="3263.54"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".09" stopColor="#fa8f21" />
                    <stop offset=".78" stopColor="#d82d7e" />
                  </radialGradient>
                  <radialGradient
                    id="1"
                    cx="1516.14"
                    cy="2623.81"
                    r="2572.12"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".64" stopColor="#8c3aaa" stopOpacity="0" />
                    <stop offset="1" stopColor="#8c3aaa" />
                  </radialGradient>
                </defs>
                <path
                  d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57"
                  fill="url(#0)"
                />
                <path
                  d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57"
                  fill="url(#1)"
                />
              </svg>
            </div>
          </div>
        </div>
        </div>
    );
}

export default SignInWith;
