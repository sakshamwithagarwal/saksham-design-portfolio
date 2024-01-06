import { portfolioFont } from "@/utils/fonts";
import "./contact.css";
import ListIconComp from "./ListIconComp";
import Link from "next/link";
import Image from "next/image";
import picture from "./contact.jpg";

const Contact = () => {
  return (
    <div className={`contact ${portfolioFont.className}`}>
      <div className="contact__wrapper">
        <div className="contact__wrapper-inner">
          <div className="contact__intro">
            <h1>Hello.</h1>
            <p>I'd Love to hear from you.</p>
          </div>
          <div className="contact__socials">
            <h2>Visit me at</h2>
            <ul>
              <li>
                <Link href={"https://www.behance.net/sakshamwithagarwal"}>
                  <ListIconComp className="icon" /> Behance
                </Link>
              </li>
              <li>
                <Link href={"https://www.instagram.com/sakshamwithagarwal"}>
                  <ListIconComp className="icon" /> Instagram
                </Link>
              </li>
              <li>
                <Link
                  href={
                    "https://www.linkedin.com/in/saksham-parag-agarwal-b063711b3"
                  }
                >
                  <ListIconComp className="icon" /> LinkedIn
                </Link>
              </li>
              <li>
                <Link href={"mailto:sakshamwithagarwal@gmail.com"}>
                  <ListIconComp className="icon" /> Mail
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="contact_picture__wrapper">
          <div className="now__streaming-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="222"
              height="215"
              viewBox="0 0 222 215"
              className="music__text"
              fill="none"
            >
              <g clipPath="url(#clip0_1384_1883)">
                <path
                  d="M121.138 13.1114L119.14 12.9723L119.692 5.05068C119.807 3.40912 119.126 2.54921 117.651 2.44626C116.676 2.37787 115.809 2.82002 115.048 3.794C114.288 4.74498 113.862 6.05398 113.745 7.7424L113.408 12.5708L111.409 12.4317L112.246 0.444119L114.244 0.583249L114.09 2.79557C115.069 1.42979 116.683 0.562168 118.325 0.677214C120.775 0.847705 121.886 2.38374 121.721 4.76217L121.138 13.1114Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M125.649 7.64489C126.022 5.96905 126.874 4.66852 128.186 3.71527C129.498 2.76203 131.024 2.49091 132.77 2.87975C134.515 3.26859 135.782 4.16186 136.565 5.58172C137.348 7.00244 137.567 8.54128 137.194 10.2171C136.821 11.893 135.969 13.1935 134.657 14.1467C133.345 15.1 131.819 15.3711 130.074 14.9823C128.328 14.5934 127.061 13.7001 126.279 12.2803C125.496 10.8596 125.277 9.32072 125.65 7.64488L125.649 7.64489ZM127.651 8.09059C127.386 9.27714 127.513 10.3565 128 11.3441C128.488 12.3317 129.326 12.9584 130.467 13.2127C131.607 13.4669 132.632 13.2549 133.493 12.5675C134.355 11.8801 134.927 10.9571 135.191 9.76972C135.455 8.58316 135.329 7.50381 134.841 6.51622C134.353 5.52778 133.515 4.90186 132.375 4.64765C131.234 4.39343 130.21 4.60544 129.348 5.29283C128.487 5.98023 127.915 6.90319 127.65 8.09059L127.651 8.09059Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M152.387 9.39791L154.299 10.1386L147.511 20.3963L145.821 19.7415L146.715 11.035L141.508 18.0696L139.818 17.4148L141.716 5.26105L143.629 6.00178L141.948 14.8895L146.644 8.44892L148.511 9.1728L147.639 17.0957L152.388 9.39705L152.387 9.39791Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M171.891 23.5534L169.959 23.5894C170.102 22.1555 169.659 21.0724 168.655 20.3858C167.711 19.7399 166.646 19.6472 166.04 20.5337C165.488 21.3407 165.934 22.2519 167.293 23.6438C168.018 24.3996 168.469 24.8815 168.917 25.6206C169.572 26.6467 169.725 27.7336 169.011 28.7763C168.338 29.7602 167.426 30.2919 166.307 30.3646C165.188 30.4374 164.095 30.0935 163.012 29.3528C160.965 27.9526 160.026 25.7789 160.668 23.5313L162.646 24.018C162.251 25.5679 162.698 26.9423 164.036 27.8574C165.237 28.6786 166.505 28.7662 167.192 27.7627C167.73 26.9753 167.171 26.1881 165.629 24.5559C163.885 22.7559 163.189 21.2395 164.386 19.4879C164.979 18.6219 165.784 18.1621 166.798 18.0745C167.811 17.9869 168.792 18.2834 169.737 18.9294C171.371 20.0468 172.087 21.5768 171.892 23.5517L171.891 23.5534Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M176.633 26.4427L177.867 25.115L180.208 27.2898L182.659 24.6517L184.987 25.0892L181.676 28.6532L185.973 32.6459L184.74 33.9736L180.442 29.9809L176.254 34.4879C175.15 35.6762 175.105 36.7409 176.118 37.682C176.905 38.4121 177.945 38.7288 179.258 38.6468L178.647 40.3901C177.198 40.4428 175.932 39.9839 174.884 39.0097C172.945 37.2079 172.854 35.2036 174.737 33.1766L178.973 28.6175L176.633 26.4427L176.633 26.4427Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M192.45 46.2274C193.483 45.1893 193.57 44.1133 192.722 43.0506C192.023 42.1746 191.003 41.7376 189.674 41.7916C188.363 41.831 186.955 42.4364 185.445 43.6408L182.053 46.3476L180.803 44.7815L190.197 37.286L191.446 38.8522L189.713 40.2355C191.601 40.0404 193.157 40.6906 194.361 42.1999C195.848 44.064 195.637 46.0934 193.699 47.7927L192.45 46.2266L192.45 46.2274Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M199.337 62.2539L194.634 54.1206C192.629 55.4173 191.995 57.4647 193.057 59.3015C193.917 60.7875 195.242 61.5085 197.055 61.4517L197.133 63.2526C194.607 63.3634 192.73 62.3551 191.489 60.2082C190.63 58.7222 190.453 57.2266 190.928 55.7121C191.414 54.2189 192.431 53.025 193.98 52.1296C195.487 51.2581 197.029 50.9725 198.575 51.2634C200.132 51.5746 201.352 52.4945 202.223 54.0017C203.119 55.5497 203.348 57.0425 202.878 58.4701C202.43 59.8865 201.484 61.0119 200.059 61.8354L199.337 62.2531L199.337 62.2539ZM196.274 53.3372L199.843 59.5096C201.316 58.2448 201.62 56.5812 200.654 54.9092C199.711 53.2788 198.108 52.7454 196.274 53.3372Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M199.595 77.4981L199.002 75.9889L200.473 75.1039C199.151 74.8028 197.822 73.5061 197.168 71.8413C196.393 69.8661 197.007 67.9083 199.204 67.0451C201.623 66.0949 203.608 67.4937 204.854 70.6677L205.743 72.9319L206.231 72.74C207.851 72.104 208.121 70.7684 207.528 69.2592C207.031 67.994 205.853 67.2784 204.582 67.3671L204.381 65.5505C206.513 65.3033 208.404 66.5329 209.215 68.5965C210.296 71.3488 209.604 73.5676 206.652 74.726L199.594 77.4972L199.595 77.4981ZM198.969 71.4677C199.317 72.3554 199.928 73.0631 200.771 73.5783C201.644 74.1061 202.658 74.1437 203.791 73.6996L204.146 73.5602L203.187 71.1191C202.446 69.2324 201.221 68.4582 199.955 68.9556C198.89 69.3739 198.525 70.3368 198.969 71.4685L198.969 71.4677Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M203.36 92.7233L202.916 90.7698L211.241 88.8774C212.52 88.5869 212.947 88.098 212.741 87.1918C212.466 85.9828 210.759 85.4661 207.666 86.1694L202.155 87.4226L201.711 85.4691L210.035 83.5767C211.314 83.2862 211.741 82.7973 211.535 81.8911C211.26 80.6821 209.553 80.1653 206.46 80.8687L200.949 82.1219L200.505 80.1684L212.225 77.5041L212.669 79.4576L211.181 79.7959C212.456 80.2394 213.219 81.0198 213.479 82.1591C213.764 83.4149 213.322 84.3714 212.122 85.0108C213.404 85.3794 214.409 86.2516 214.684 87.4606C215.038 89.0185 214.243 90.2507 212.104 90.7372L203.36 92.725L203.36 92.7233Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M213.893 95.2034L215.653 95.0727L216.072 100.733L205.847 101.491L206.176 105.914L204.416 106.044L203.632 95.4866L205.392 95.3558L205.699 99.4935L214.165 98.866L213.893 95.2043L213.893 95.2034ZM220.84 99.2312C220.908 100.158 220.224 100.927 219.297 100.995C218.37 101.064 217.627 100.402 217.558 99.4747C217.49 98.5475 218.174 97.7791 219.053 97.7142C219.981 97.6456 220.771 98.3041 220.84 99.2312Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M203.622 119.482L203.769 117.484L211.688 118.067C213.329 118.188 214.192 117.51 214.3 116.035C214.372 115.06 213.934 114.191 212.962 113.426C212.013 112.663 210.706 112.232 209.017 112.108L204.19 111.753L204.337 109.755L216.323 110.637L216.176 112.635L213.964 112.472C215.327 113.456 216.188 115.074 216.067 116.715C215.888 119.164 214.347 120.271 211.97 120.096L203.622 119.482Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M213.362 128.164C213.904 129.118 214.026 130.197 213.757 131.383C213.567 132.22 213.183 132.94 212.63 133.548L213.332 136.275L211.527 136.794L210.952 134.585C210.32 134.784 209.632 134.799 208.888 134.63C207.702 134.361 206.838 133.75 206.292 132.819C205.744 131.887 205.622 130.809 205.897 129.599C206.082 128.785 206.408 128.102 206.875 127.547C206.76 126.763 206.444 126.324 205.908 126.203C205.257 126.055 204.805 126.54 204.557 127.632L203.866 130.679C203.296 133.19 201.858 134.356 199.742 133.876C198.369 133.565 197.491 132.803 197.059 131.581C196.627 130.358 196.597 128.982 196.94 127.47C197.715 124.052 199.518 122.358 202.029 122.927C203.076 123.165 203.824 123.75 204.267 124.707C204.836 124.249 205.48 124.101 206.248 124.276C207.295 124.514 208.059 125.347 208.207 126.53C208.968 126.19 209.812 126.136 210.765 126.353C211.951 126.622 212.815 127.233 213.361 128.164L213.362 128.164ZM202.831 127.486C202.941 126.998 203.055 126.608 203.198 126.298C203.003 125.545 202.495 125.088 201.658 124.897C200.285 124.586 199.143 125.744 198.663 127.861C198.162 130.071 198.685 131.534 200.011 131.834C201.174 132.098 201.903 131.579 202.203 130.253L202.832 127.486L202.831 127.486ZM210.333 128.259C209.636 128.101 209.03 128.184 208.54 128.513C208.044 128.865 207.714 129.353 207.571 129.981C207.429 130.609 207.493 131.185 207.793 131.694C208.089 132.226 208.599 132.561 209.32 132.725C210.042 132.889 210.624 132.801 211.119 132.449C211.609 132.12 211.94 131.632 212.082 131.005C212.224 130.376 212.137 129.794 211.842 129.263C211.541 128.755 211.031 128.419 210.333 128.261L210.333 128.259Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M185.167 164.683L186.287 163.022L192.87 167.461C194.234 168.381 195.32 168.221 196.146 166.995C196.693 166.185 196.744 165.213 196.281 164.066C195.836 162.933 194.916 161.909 193.513 160.963L189.499 158.257L190.619 156.596L200.583 163.314L199.463 164.975L197.625 163.735C198.317 165.266 198.262 167.098 197.342 168.462C195.969 170.499 194.082 170.694 192.105 169.361L185.166 164.681L185.167 164.683Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M187.646 171.323C188.91 172.484 189.611 173.872 189.781 175.484C189.951 177.097 189.422 178.554 188.212 179.872C187.003 181.189 185.596 181.839 183.974 181.807C182.353 181.774 180.91 181.195 179.646 180.034C178.381 178.872 177.681 177.485 177.511 175.872C177.341 174.259 177.869 172.802 179.079 171.485C180.289 170.167 181.696 169.517 183.317 169.549C184.937 169.582 186.381 170.161 187.645 171.323L187.646 171.323ZM186.259 172.833C185.363 172.011 184.366 171.58 183.266 171.509C182.166 171.438 181.205 171.85 180.415 172.711C179.624 173.571 179.295 174.564 179.46 175.654C179.625 176.745 180.138 177.701 181.034 178.524C181.93 179.346 182.927 179.777 184.027 179.848C185.126 179.919 186.088 179.507 186.878 178.646C187.668 177.786 187.997 176.793 187.833 175.703C187.668 174.612 187.155 173.656 186.259 172.833Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M172.759 193.602L171.16 194.888L165.672 183.879L167.083 182.743L174.176 187.871L170.687 179.844L172.099 178.708L181.676 186.429L180.077 187.714L173.22 181.814L176.45 189.101L174.889 190.357L168.464 185.641L172.756 193.602L172.759 193.602Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M150.748 203.415L151.682 201.724C152.852 202.564 154.012 202.722 155.108 202.196C156.14 201.701 156.752 200.826 156.287 199.858C155.865 198.977 154.853 198.907 152.967 199.388C151.95 199.639 151.308 199.788 150.443 199.806C149.226 199.86 148.21 199.45 147.662 198.31C147.147 197.235 147.143 196.179 147.639 195.173C148.136 194.168 148.98 193.393 150.163 192.825C152.399 191.752 154.751 192.025 156.376 193.706L154.966 195.176C153.822 194.059 152.408 193.758 150.946 194.459C149.634 195.088 148.924 196.143 149.45 197.24C149.862 198.1 150.824 198.009 153.008 197.49C155.44 196.879 157.1 197.034 158.018 198.948C158.472 199.894 158.468 200.821 158.037 201.743C157.605 202.664 156.858 203.366 155.826 203.861C154.041 204.718 152.359 204.572 150.746 203.415L150.748 203.415Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M145.874 206.078L146.407 207.81L143.353 208.75L144.412 212.191L142.869 213.988L141.439 209.339L135.832 211.065L135.299 209.332L140.906 207.607L139.097 201.727C138.62 200.177 137.72 199.605 136.398 200.012C135.373 200.328 134.579 201.072 133.993 202.249L132.788 200.848C133.467 199.566 134.498 198.7 135.865 198.28C138.395 197.501 140.176 198.426 140.99 201.069L142.82 207.018L145.875 206.078L145.874 206.078Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M120.831 209.882C121.213 211.296 122.102 211.909 123.446 211.706C124.554 211.538 125.442 210.874 126.06 209.695C126.681 208.54 126.862 207.018 126.574 205.108L125.926 200.817L127.906 200.517L129.701 212.401L127.721 212.701L127.39 210.508C126.614 212.241 125.274 213.263 123.364 213.551C121.005 213.908 119.354 212.709 118.852 210.181L120.832 209.882L120.831 209.882Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M103.509 207.833L112.904 207.827C112.784 205.443 111.328 203.87 109.205 203.871C107.489 203.872 106.202 204.66 105.344 206.258L103.745 205.424C104.912 203.182 106.723 202.06 109.203 202.059C110.92 202.058 112.304 202.653 113.377 203.821C114.427 204.988 114.953 206.466 114.954 208.254C114.955 209.995 114.432 211.474 113.407 212.667C112.358 213.86 110.952 214.457 109.211 214.458C107.423 214.46 106.016 213.912 105.014 212.792C104.011 211.696 103.51 210.313 103.509 208.668L103.508 207.833L103.509 207.833ZM112.762 209.64L105.632 209.644C105.991 211.551 107.279 212.648 109.211 212.646C111.095 212.645 112.357 211.523 112.762 209.64Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M90.1779 200.434L91.7817 200.676L91.8126 202.392C92.7342 201.398 94.5214 200.895 96.2905 201.161C98.3894 201.477 99.7769 202.988 99.4254 205.323C99.0382 207.893 96.835 208.912 93.4638 208.404L91.0591 208.042L90.9811 208.561C90.7216 210.282 91.7439 211.183 93.3468 211.425C94.6906 211.628 95.8998 210.966 96.458 209.82L98.1319 210.554C97.2807 212.524 95.27 213.547 93.0765 213.217C90.1528 212.777 88.5771 211.068 89.0496 207.932L90.1788 200.434L90.1779 200.434ZM95.7134 202.908C94.7701 202.766 93.8519 202.941 92.9852 203.413C92.0913 203.905 91.5515 204.764 91.3708 205.967L91.3135 206.344L93.9075 206.735C95.9118 207.036 97.195 206.362 97.3973 205.018C97.568 203.886 96.9158 203.088 95.7134 202.908Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M75.11 196.083L77.0235 196.675L74.5004 204.83C74.1129 206.083 74.3224 206.697 75.2109 206.972C76.3953 207.338 77.6967 206.118 78.6339 203.089L80.3039 197.69L82.2174 198.282L79.6943 206.437C79.3068 207.69 79.5163 208.304 80.4048 208.579C81.5892 208.945 82.8906 207.725 83.8277 204.696L85.4978 199.297L87.4113 199.889L83.8594 211.37L81.9459 210.778L82.3972 209.32C81.3755 210.202 80.318 210.474 79.2018 210.128C77.9714 209.748 77.3649 208.887 77.4104 207.527C76.4502 208.453 75.1924 208.888 74.008 208.521C72.4816 208.049 71.812 206.744 72.4608 204.648L75.1109 196.082L75.11 196.083Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M60.734 207.966C59.896 207.562 59.5735 206.585 59.9772 205.748C60.3817 204.911 61.3257 204.599 62.1636 205.003C63.0016 205.407 63.3241 206.383 62.9407 207.178C62.5362 208.015 61.5711 208.371 60.7331 207.966L60.734 207.966ZM67.695 203.965L66.9282 205.554L61.8168 203.087L66.273 193.852L62.2786 191.924L63.0454 190.336L72.5804 194.937L71.8136 196.526L68.0769 194.723L64.3875 202.369L67.695 203.965Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M51.8046 182.93L53.4614 184.056L48.9977 190.623C48.0725 191.984 48.2285 193.07 49.4506 193.901C50.2594 194.45 51.2313 194.506 52.3791 194.047C53.5142 193.607 54.541 192.69 55.4924 191.29L58.214 187.286L59.8708 188.412L53.1147 198.351L51.4579 197.225L52.7049 195.391C51.1705 196.078 49.3392 196.015 47.9788 195.09C45.9479 193.709 45.7596 191.823 47.0997 189.851L51.8046 182.929L51.8046 182.93Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M39.4168 187.025C38.3198 187.017 37.3242 186.583 36.4317 185.757C35.8017 185.174 35.3696 184.482 35.1203 183.699L32.4081 182.944L32.8606 181.121L35.0611 181.728C35.2049 181.081 35.5354 180.477 36.0543 179.917C36.8802 179.025 37.8415 178.582 38.9214 178.575C40.0012 178.567 40.9968 179 41.9064 179.842C42.5194 180.41 42.9486 181.034 43.1941 181.716C43.9311 182.007 44.4691 181.953 44.8413 181.551C45.2949 181.061 45.1016 180.427 44.2792 179.666L41.9864 177.544C40.0963 175.795 39.806 173.967 41.2796 172.374C42.2352 171.342 43.3339 170.962 44.6089 171.199C45.884 171.437 47.0909 172.099 48.2279 173.152C50.8002 175.532 51.3662 177.94 49.617 179.83C48.8879 180.618 48.0079 180.973 46.9574 180.879C47.0694 181.599 46.8744 182.231 46.3403 182.809C45.6111 183.596 44.5075 183.842 43.4096 183.378C43.3236 184.208 42.9477 184.966 42.2838 185.683C41.458 186.575 40.4966 187.018 39.4168 187.026L39.4168 187.025ZM40.8485 184.354C41.3343 183.829 41.5653 183.264 41.5263 182.675C41.4693 182.069 41.2125 181.539 40.7398 181.102C40.267 180.665 39.7346 180.433 39.1445 180.439C38.5364 180.428 37.9899 180.703 37.488 181.245C36.986 181.788 36.7711 182.336 36.8281 182.941C36.868 183.53 37.1248 184.061 37.5975 184.497C38.0703 184.935 38.6188 185.15 39.226 185.16C39.8162 185.154 40.3627 184.879 40.8485 184.354ZM45.2689 178.244C45.6365 178.584 45.9179 178.876 46.1141 179.156C46.8643 179.363 47.5141 179.153 48.0975 178.522C49.053 177.49 48.6208 175.92 47.0281 174.447C45.3654 172.908 43.8364 172.63 42.9131 173.627C42.1034 174.503 42.1888 175.393 43.1864 176.316L45.2689 178.244Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M21.8882 144.347L22.7668 146.147L15.6308 149.629C14.1519 150.351 13.7473 151.371 14.3958 152.699C14.8243 153.578 15.6407 154.109 16.8652 154.28C18.0684 154.462 19.4154 154.177 20.9367 153.435L25.2867 151.311L26.1653 153.112L15.3644 158.382L14.4858 156.581L16.4789 155.609C14.8064 155.444 13.2483 154.48 12.526 153.001C11.449 150.793 12.2228 149.062 14.3655 148.017L21.8873 144.347L21.8882 144.347Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M14.898 143.174C13.2598 143.689 11.7078 143.601 10.2258 142.942C8.74384 142.283 7.74683 141.097 7.21096 139.39C6.6751 137.684 6.81524 136.141 7.65351 134.752C8.49178 133.364 9.71589 132.405 11.3532 131.89C12.9913 131.376 14.5433 131.463 16.0245 132.122C17.5056 132.781 18.5035 133.968 19.0393 135.674C19.5752 137.38 19.435 138.924 18.5968 140.312C17.7585 141.7 16.5352 142.659 14.8971 143.174L14.898 143.174ZM14.2836 141.218C15.4437 140.854 16.3148 140.205 16.9268 139.288C17.5388 138.371 17.6622 137.333 17.3119 136.218C16.9616 135.103 16.266 134.323 15.2398 133.92C14.2137 133.518 13.1285 133.483 11.9676 133.848C10.8066 134.213 9.93632 134.861 9.32436 135.779C8.7124 136.696 8.58891 137.734 8.93925 138.849C9.28959 139.964 9.98517 140.744 11.0105 141.147C12.0366 141.549 13.1218 141.584 14.2827 141.219L14.2836 141.218Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M3.04794 119.142L2.73389 117.116L15.0115 117.867L15.2888 119.657L7.3016 123.236L15.9974 124.229L16.2747 126.019L4.80017 130.452L4.48612 128.426L13.0234 125.437L5.09803 124.591L4.79098 122.611L12.0882 119.405L3.04708 119.141L3.04794 119.142Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M5.55463 95.1739L6.55186 96.8288C5.23853 97.4218 4.5227 98.3479 4.42974 99.5602C4.34245 100.702 4.79438 101.669 5.86436 101.751C6.83893 101.825 7.40607 100.984 7.9315 99.1106C8.22374 98.1045 8.41532 97.4735 8.83207 96.7164C9.39311 95.6351 10.2581 94.9596 11.5181 95.0566C12.7074 95.1471 13.6233 95.6722 14.2454 96.6047C14.8675 97.5373 15.1165 98.6562 15.0172 99.9638C14.828 102.437 13.4153 104.338 11.148 104.906L10.5805 102.949C12.1202 102.517 13.0875 101.442 13.2111 99.8264C13.3219 98.3765 12.7636 97.2334 11.5514 97.1404C10.6006 97.0677 10.198 97.9456 9.55535 100.097C8.86861 102.507 7.90334 103.869 5.78808 103.707C4.74195 103.627 3.94035 103.159 3.35867 102.326C2.77699 101.492 2.5421 100.494 2.62939 99.3521C2.78055 97.3782 3.74743 95.9938 5.55548 95.1756L5.55463 95.1739Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M5.68516 89.6215L3.91893 89.2174L4.63173 86.1027L1.12227 85.2986L0.337268 83.0638L5.07934 84.1497L6.38867 78.4316L8.15491 78.8357L6.84558 84.5538L12.8424 85.9267C14.4228 86.289 15.3678 85.7954 15.6765 84.4469C15.9158 83.401 15.6696 82.3417 14.9421 81.2452L16.7572 80.9022C17.5278 82.1305 17.7624 83.4564 17.4428 84.851C16.8521 87.4313 15.161 88.5121 12.4647 87.8947L6.39797 86.5059L5.68516 89.6207L5.68516 89.6215Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M14.9118 66.0317C13.4966 65.6559 12.5208 66.119 12.0252 67.384C11.6156 68.4272 11.747 69.5287 12.4594 70.6533C13.1486 71.7687 14.3771 72.6859 16.1752 73.3914L20.2159 74.9758L19.4843 76.8405L8.29546 72.452L9.02702 70.5873L11.0921 71.3973C9.97871 69.8595 9.76405 68.187 10.4695 66.3888C11.3401 64.1685 13.2035 63.3373 15.6442 64.1661L14.9127 66.0308L14.9118 66.0317Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M25.3475 52.0546L20.6552 60.1942C22.7802 61.2815 24.8707 60.8079 25.9303 58.9692C26.7877 57.4821 26.7492 55.9732 25.7941 54.4314L27.3154 53.4637C28.674 55.5957 28.7398 57.7254 27.501 59.874C26.6435 61.361 25.4362 62.2619 23.8885 62.6081C22.3527 62.9337 20.8092 62.6497 19.2598 61.7567C17.7514 60.8874 16.7331 59.6942 16.2118 58.2111C15.7031 56.7067 15.8894 55.19 16.7587 53.6816C17.6516 52.1322 18.8298 51.1872 20.301 50.8797C21.7517 50.5603 23.1997 50.8167 24.6253 51.6386L25.3484 52.0555L25.3475 52.0546ZM19.1564 59.1648L22.7172 52.9878C20.8861 52.3446 19.2925 52.9124 18.3277 54.5855C17.3874 56.2177 17.7271 57.8719 19.1564 59.1639L19.1564 59.1648Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M38.42 44.2084L37.4092 45.4763L35.9069 44.6445C36.3074 45.9399 35.8489 47.7396 34.7339 49.1374C33.4105 50.7967 31.4085 51.2435 29.562 49.7718C27.5294 48.1518 27.7494 45.734 29.8752 43.0682L31.3918 41.1662L30.9817 40.8392C29.6206 39.7538 28.3287 40.1884 27.3179 41.4563C26.4707 42.5192 26.4397 43.8973 27.1526 44.9538L25.6795 46.0363C24.3992 44.3144 24.5186 42.0614 25.9004 40.3269C27.7441 38.0148 30.0108 37.5048 32.4903 39.4815L38.4192 44.2084L38.42 44.2084ZM33.5105 47.7653C34.1053 47.0194 34.4125 46.1367 34.4374 45.1496C34.4579 44.1292 33.9833 43.2327 33.0323 42.4744L32.7341 42.2363L31.0989 44.287C29.8356 45.8719 29.7785 47.3208 30.8414 48.168C31.736 48.8814 32.753 48.7163 33.5105 47.7653Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M49.7227 33.3355L48.2533 34.6965L42.4518 28.4336C41.5605 27.4715 40.9238 27.3455 40.2417 27.9777C39.3322 28.8202 39.7379 30.5568 41.8935 32.8839L45.7335 37.0301L44.2641 38.3911L38.4626 32.1281C37.5713 31.166 36.9346 31.0401 36.2525 31.6722C35.343 32.5148 35.7487 34.2513 37.9043 36.5785L41.7452 40.7246L40.2757 42.0856L32.1082 33.269L33.5776 31.908L34.6144 33.0279C34.3611 31.7021 34.6549 30.65 35.5118 29.8562C36.456 28.9811 37.5057 28.8865 38.6601 29.6057C38.3388 28.3108 38.5906 27.0042 39.5001 26.1616C40.6726 25.0761 42.1377 25.1493 43.6279 26.7587L49.721 33.3364L49.7227 33.3355Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M46.6041 22.9729L45.6111 21.5139L50.3024 18.3206L56.0721 26.797L59.7383 24.3012L60.7314 25.7602L51.9789 31.7175L50.9859 30.2585L54.416 27.9237L49.6394 20.9063L46.6033 22.9729L46.6041 22.9729ZM46.6197 14.9437C47.3883 14.4202 48.3958 14.6289 48.9193 15.3975C49.4428 16.1661 49.2407 17.1403 48.4713 17.6638C47.7018 18.1873 46.6952 17.9786 46.1991 17.2491C45.6756 16.4805 45.8512 15.4663 46.6197 14.9437Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M72.7663 19.7287L70.9628 20.6005L67.5073 13.4508C66.7918 11.9693 65.7733 11.5613 64.4423 12.2046C63.5617 12.6298 63.0286 13.4445 62.8522 14.6681C62.6655 15.8705 62.9461 17.2184 63.6822 18.7423L65.7883 23.1008L63.9847 23.9726L58.7556 13.152L60.5592 12.2802L61.5237 14.2767C61.6957 12.6051 62.6653 11.0503 64.1468 10.334C66.3583 9.26548 68.0861 10.0453 69.1236 12.1931L72.7655 19.7287L72.7663 19.7287Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M75.4137 6.95262C75.9694 6.00673 76.843 5.36102 78.0049 5.00112C78.8248 4.74737 79.6397 4.71933 80.4435 4.89488L82.4538 2.92362L83.8064 4.22702L82.1813 5.82879C82.6694 6.27645 83.0269 6.86516 83.2522 7.59409C83.6121 8.75594 83.5142 9.8098 82.9815 10.7488C82.4489 11.6878 81.5752 12.3335 80.3912 12.7003C79.5943 12.9471 78.8383 13.0064 78.1249 12.8782C77.5036 13.3704 77.2816 13.8636 77.4439 14.3875C77.6415 15.0254 78.2868 15.1744 79.3576 14.843L82.3414 13.9186C84.8011 13.1565 86.5293 13.8188 87.1722 15.8916C87.5891 17.2355 87.3681 18.3776 86.5256 19.3621C85.6823 20.3475 84.5057 21.0617 83.0258 21.52C79.6771 22.5574 77.3092 21.8432 76.5472 19.3835C76.2296 18.3586 76.3628 17.4187 76.969 16.556C76.2884 16.2931 75.8384 15.8078 75.6054 15.0559C75.2878 14.031 75.6274 12.9523 76.5783 12.2331C75.9026 11.7436 75.4347 11.0395 75.1448 10.1056C74.7849 8.94375 74.8827 7.88988 75.4154 6.95091L75.4137 6.95262ZM77.0109 9.5282C77.2223 10.2112 77.5973 10.6951 78.1273 10.9552C78.6802 11.2084 79.268 11.2512 79.882 11.0604C80.497 10.8697 80.9648 10.5254 81.2548 10.0107C81.5678 9.48906 81.6028 8.87915 81.3844 8.1732C81.1652 7.46724 80.7979 7.00717 80.2459 6.75394C79.716 6.49382 79.1282 6.45109 78.5132 6.64183C77.8983 6.83256 77.4382 7.1998 77.1252 7.72143C76.8352 8.23615 76.7994 8.84606 77.0117 9.52905L77.0109 9.5282ZM80.0931 16.4121C79.6151 16.5605 79.2203 16.6575 78.8806 16.6878C78.3259 17.2343 78.1839 17.9026 78.4376 18.7225C78.8545 20.0664 80.4291 20.4772 82.5019 19.8342C84.6657 19.1636 85.6717 17.9783 85.2687 16.6804C84.9157 15.5415 84.1017 15.1701 82.8029 15.5723L80.0922 16.4121L80.0931 16.4121Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M98.0191 9.994C99.3798 9.98841 100.478 8.88084 100.473 7.52016C100.467 6.15948 99.3596 5.06096 97.9989 5.06655C96.6382 5.07213 95.5397 6.17971 95.5453 7.54038C95.5509 8.90106 96.6584 9.99958 98.0191 9.994Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M201.574 149.906C202.934 149.9 204.033 148.792 204.027 147.432C204.022 146.071 202.914 144.973 201.554 144.978C200.193 144.984 199.094 146.091 199.1 147.452C199.106 148.813 200.213 149.911 201.574 149.906Z"
                  fill="var(--text-darker)"
                />
                <path
                  d="M28.6295 169.631C29.9901 169.626 31.0887 168.518 31.0831 167.157C31.0775 165.797 29.9699 164.698 28.6092 164.704C27.2486 164.709 26.15 165.817 26.1556 167.178C26.1612 168.538 27.2688 169.637 28.6295 169.631Z"
                  fill="var(--text-darker)"
                />
              </g>
              <defs>
                <clipPath id="clip0_1384_1883">
                  <rect
                    width="220.438"
                    height="214"
                    fill="white"
                    transform="translate(0 0.904785) rotate(-0.235143)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          <Image src={picture} className="contact_picture" />
        </div>
      </div>
    </div>
  );
};

export default Contact;