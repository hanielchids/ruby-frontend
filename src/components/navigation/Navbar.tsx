import React from "react";
import { setAuthInfo } from "../../store/authInfoSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(
      setAuthInfo({
        isAuthenticated: false,
        userId: null,
        jwt: null,
      })
    );
    navigate("/login");
  };

  return (
    <div className="w-full">
      <nav className="flex items-center justify-between flex-wrap bg-white px-6 py-2 mb-4 shadow-lg">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="95"
            height="80"
            viewBox="0 0 95 24"
          >
            <g fill="none" fillRule="evenodd" transform="translate(.645 .029)">
              <path
                fill="#776591"
                fillRule="nonzero"
                d="M58.7520999 8C59.6382666 8 60.4289881 8.13485342 61.1242881 8.40456432 61.8195881 8.67427521 62.4058126 9.05463102 62.8829793 9.54564315 63.3601459 10.0366553 63.7248321 10.6348512 63.9770488 11.340249 64.2292655 12.0456467 64.3553719 12.8340205 64.3553719 13.7053942 64.3553719 14.5491052 64.2531234 15.3167324 64.0486234 16.0082988 63.8441234 16.6998651 63.5441946 17.2946033 63.1488279 17.7925311 62.7534613 18.2904589 62.2626686 18.6777303 61.6764353 18.9543568 61.090202 19.2309834 60.4153621 19.3692946 59.6518954 19.3692946 59.2292621 19.3692946 58.8339013 19.3278012 58.4658013 19.2448133 58.0977013 19.1618253 57.74324 19.0442608 57.4024067 18.8921162L57.4024067 23 54.3553719 23 54.3553719 8.62240664C54.6280386 8.53941867 54.9416005 8.45988973 55.2960672 8.38381743 55.6505339 8.30774512 56.0220366 8.2420473 56.4105866 8.18672199 56.7991366 8.13139668 57.1944974 8.08644554 57.5966807 8.05186722 57.998864 8.0172889 58.3839999 8 58.7520999 8zM58.73165 10.6348548C58.4589834 10.6348548 58.2067705 10.6452281 57.9750038 10.6659751 57.7432371 10.6867221 57.5523733 10.7109266 57.4024067 10.7385892L57.4024067 16.3195021C57.5932733 16.443984 57.8420779 16.5477174 58.1488279 16.6307054 58.4555779 16.7136934 58.7657316 16.7551867 59.0792983 16.7551867 60.5244316 16.7551867 61.2469874 15.7662616 61.2469874 13.7883817 61.2469874 12.8340201 61.0356739 12.0698507 60.6130406 11.4958506 60.1904073 10.9218505 59.5632834 10.6348548 58.73165 10.6348548zM49.0441136 16.7041742C49.3355058 16.7041742 49.6136487 16.6975197 49.8785507 16.6842105 50.1434527 16.6709013 50.3553711 16.6509378 50.5143123 16.6243194L50.5143123 14.3684211C50.3951064 14.3418026 50.2163002 14.3151846 49.9778885 14.2885662 49.7394767 14.2619478 49.5209358 14.2486388 49.3222593 14.2486388 49.0441122 14.2486388 48.7825254 14.2652751 48.5374911 14.2985481 48.2924568 14.3318211 48.0772271 14.3950389 47.8917957 14.4882033 47.7063644 14.5813677 47.5606704 14.7078032 47.4547096 14.8675136 47.3487489 15.027224 47.2957693 15.2268591 47.2957693 15.4664247 47.2957693 15.9322467 47.4513968 16.25499 47.7626567 16.4346642 48.0739165 16.6143385 48.5010645 16.7041742 49.0441136 16.7041742zM48.805703 8C49.6798796 8 50.4083491 8.09981751 50.9911335 8.29945554 51.5739179 8.49909256 52.0408006 8.7852371 52.3917957 9.15789474 52.7427909 9.53055238 52.9911328 9.98305844 53.1368289 10.5154265 53.2825249 11.0477946 53.3553719 11.6400451 53.3553719 12.292196L53.3553719 18.4809437C52.9315287 18.5741081 52.3421306 18.6839074 51.58716 18.8103448 50.8321893 18.9367822 49.9182912 19 48.8454381 19 48.1699381 19 47.5573614 18.9401095 47.0076898 18.8203267 46.4580182 18.7005439 45.984513 18.5042361 45.58716 18.2313975 45.189807 17.9585588 44.8851743 17.602543 44.6732527 17.1633394 44.4613311 16.7241357 44.3553719 16.1851212 44.3553719 15.5462795 44.3553719 14.9340562 44.4778872 14.4150052 44.7229216 13.9891107 44.9679559 13.5632163 45.2957672 13.2238367 45.7063653 12.9709619 46.1169634 12.7180871 46.5871573 12.5350883 47.1169613 12.4219601 47.6467653 12.3088319 48.1964287 12.2522686 48.7659679 12.2522686 49.1500758 12.2522686 49.491132 12.2689049 49.7891467 12.3021779 50.0871615 12.3354509 50.3288809 12.3787051 50.5143123 12.4319419L50.5143123 12.1524501C50.5143123 11.6467004 50.3619959 11.2407759 50.0573587 10.9346642 49.7527214 10.6285526 49.2229253 10.4754991 48.4679547 10.4754991 47.9646409 10.4754991 47.4679571 10.5120988 46.9778885 10.5852995 46.4878198 10.6585001 46.063983 10.7616448 45.7063653 10.8947368L45.3288818 8.49909256C45.5010681 8.44585575 45.7162978 8.3892925 45.9745772 8.32940109 46.2328566 8.26950968 46.5143108 8.21627368 46.8189481 8.16969147 47.1235853 8.12310926 47.4447742 8.08318226 47.7825242 8.04990926 48.1202743 8.01663625 48.4613304 8 48.805703 8zM70.0441136 16.7041742C70.3355058 16.7041742 70.6136487 16.6975197 70.8785507 16.6842105 71.1434527 16.6709013 71.3553711 16.6509378 71.5143123 16.6243194L71.5143123 14.3684211C71.3951064 14.3418026 71.2163002 14.3151846 70.9778885 14.2885662 70.7394767 14.2619478 70.5209358 14.2486388 70.3222593 14.2486388 70.0441122 14.2486388 69.7825254 14.2652751 69.5374911 14.2985481 69.2924568 14.3318211 69.0772271 14.3950389 68.8917957 14.4882033 68.7063644 14.5813677 68.5606704 14.7078032 68.4547096 14.8675136 68.3487489 15.027224 68.2957693 15.2268591 68.2957693 15.4664247 68.2957693 15.9322467 68.4513968 16.25499 68.7626567 16.4346642 69.0739165 16.6143385 69.5010645 16.7041742 70.0441136 16.7041742zM69.805703 8C70.6798796 8 71.4083491 8.09981751 71.9911335 8.29945554 72.5739179 8.49909256 73.0408006 8.7852371 73.3917957 9.15789474 73.7427909 9.53055238 73.9911328 9.98305844 74.1368289 10.5154265 74.2825249 11.0477946 74.3553719 11.6400451 74.3553719 12.292196L74.3553719 18.4809437C73.9315287 18.5741081 73.3421306 18.6839074 72.58716 18.8103448 71.8321893 18.9367822 70.9182912 19 69.8454381 19 69.1699381 19 68.5573614 18.9401095 68.0076898 18.8203267 67.4580182 18.7005439 66.984513 18.5042361 66.58716 18.2313975 66.189807 17.9585588 65.8851743 17.602543 65.6732527 17.1633394 65.4613311 16.7241357 65.3553719 16.1851212 65.3553719 15.5462795 65.3553719 14.9340562 65.4778872 14.4150052 65.7229216 13.9891107 65.9679559 13.5632163 66.2957672 13.2238367 66.7063653 12.9709619 67.1169634 12.7180871 67.5871573 12.5350883 68.1169613 12.4219601 68.6467653 12.3088319 69.1964287 12.2522686 69.7659679 12.2522686 70.1500758 12.2522686 70.491132 12.2689049 70.7891467 12.3021779 71.0871615 12.3354509 71.3288809 12.3787051 71.5143123 12.4319419L71.5143123 12.1524501C71.5143123 11.6467004 71.3619959 11.2407759 71.0573587 10.9346642 70.7527214 10.6285526 70.2229253 10.4754991 69.4679547 10.4754991 68.9646409 10.4754991 68.4679571 10.5120988 67.9778885 10.5852995 67.4878198 10.6585001 67.063983 10.7616448 66.7063653 10.8947368L66.3288818 8.49909256C66.5010681 8.44585575 66.7162978 8.3892925 66.9745772 8.32940109 67.2328566 8.26950968 67.5143108 8.21627368 67.8189481 8.16969147 68.1235853 8.12310926 68.4447742 8.08318226 68.7825242 8.04990926 69.1202743 8.01663625 69.4613304 8 69.805703 8zM30.4565865 6.97107438C31.968065 6.97107438 33.1623851 7.46565427 34.0395824 8.45482889 34.9167798 9.44400351 35.3553719 10.8988626 35.3553719 12.8194498 35.3553719 13.0071764 35.3486243 13.2129505 35.335129 13.4367784 35.3216336 13.6606062 35.3081385 13.8591602 35.2946432 14.0324462L28.4525379 14.0324462C28.5200146 14.6967095 28.8101602 15.22378 29.3229832 15.6136737 29.8358063 16.0035673 30.5240585 16.1985112 31.3877606 16.1985112 31.9410697 16.1985112 32.4842491 16.1443601 33.0173152 16.0360563 33.5503813 15.9277525 33.9855996 15.7941799 34.3229832 15.6353343L34.7278415 18.2562729C34.5658974 18.3429155 34.3499751 18.4295577 34.0800683 18.5162007 33.8101614 18.6028438 33.5098945 18.6786553 33.1792585 18.7436376 32.8486226 18.8086198 32.4943751 18.8627709 32.1165055 18.9060924 31.7386359 18.9494139 31.3607719 18.9710744 30.9829023 18.9710744 30.0247328 18.9710744 29.1914078 18.8194513 28.4829023 18.5162007 27.7743967 18.2129501 27.187358 17.7977918 26.7217687 17.2707134 26.2561793 16.7436349 25.9120532 16.1190924 25.68938 15.3970672 25.4667068 14.6750419 25.3553719 13.8952663 25.3553719 13.057717 25.3553719 12.0468816 25.5004447 11.1624139 25.7905946 10.4042874 26.0807445 9.64616084 26.4619822 9.01439821 26.9343193 8.50898052 27.4066563 8.00356283 27.9498358 7.62089517 28.5638739 7.36096608 29.1779121 7.10103698 29.80881 6.97107438 30.4565865 6.97107438zM30.4970723 9.63533431C30.1596887 9.63533431 29.8695432 9.69670554 29.626627 9.81944983 29.3837108 9.94219413 29.1812836 10.1046474 29.0193395 10.3068145 28.8573954 10.5089815 28.7325653 10.7436362 28.6448456 11.0107856 28.5571258 11.2779349 28.4930239 11.5486903 28.4525379 11.8230599L32.4403921 11.8230599C32.4268968 11.5486903 32.3830376 11.281545 32.3088132 11.0216159 32.2345888 10.7616868 32.1198801 10.5306422 31.9646836 10.3284751 31.8094872 10.126308 31.6138076 9.96024471 31.3776391 9.83028016 31.1414706 9.70031561 30.8479513 9.63533431 30.4970723 9.63533431zM36.3553719 5.48484848L39.3439106 5 39.3439106 8.13131313 42.9341685 8.13131313 42.9341685 10.6363636 39.3439106 10.6363636 39.3439106 14.3737374C39.3439106 15.0067372 39.4542247 15.5117826 39.6748561 15.8888889 39.8954876 16.2659952 40.3400868 16.4545455 41.008667 16.4545455 41.3295855 16.4545455 41.6605278 16.4242427 42.0015037 16.3636364 42.3424796 16.30303 42.6533648 16.2188558 42.9341685 16.1111111L43.3553719 18.4545455C42.9943386 18.6026943 42.5931965 18.7306392 42.1519335 18.8383838 41.7106706 18.9461285 41.1691287 19 40.5272917 19 39.7116238 19 39.0363679 18.8888889 38.5015037 18.6666667 37.9666395 18.4444433 37.5387546 18.1346821 37.2178361 17.7373737 36.8969176 17.3400654 36.6729466 16.8585887 36.5459163 16.2929293 36.4188861 15.7272699 36.3553719 15.1010101 36.3553719 14.4141414L36.3553719 5.48484848zM76.3553719 5.48484848L79.3439106 5 79.3439106 8.13131313 82.9341685 8.13131313 82.9341685 10.6363636 79.3439106 10.6363636 79.3439106 14.3737374C79.3439106 15.0067372 79.4542247 15.5117826 79.6748561 15.8888889 79.8954876 16.2659952 80.3400868 16.4545455 81.008667 16.4545455 81.3295855 16.4545455 81.6605278 16.4242427 82.0015037 16.3636364 82.3424796 16.30303 82.6533648 16.2188558 82.9341685 16.1111111L83.3553719 18.4545455C82.9943386 18.6026943 82.5931965 18.7306392 82.1519335 18.8383838 81.7106706 18.9461285 81.1691287 19 80.5272917 19 79.7116238 19 79.0363679 18.8888889 78.5015037 18.6666667 77.9666395 18.4444433 77.5387546 18.1346821 77.2178361 17.7373737 76.8969176 17.3400654 76.6729466 16.8585887 76.5459163 16.2929293 76.4188861 15.7272699 76.3553719 15.1010101 76.3553719 14.4141414L76.3553719 5.48484848zM84.3553719 19L84.3553719 3.49484536 87.3091164 3 87.3091164 8.19587629C87.5073553 8.12714742 87.761758 8.06185598 88.0723323 8 88.3829065 7.93814402 88.6835643 7.90721649 88.9743146 7.90721649 89.8201338 7.90721649 90.5238713 8.02749021 91.0855481 8.26804124 91.6472249 8.50859227 92.0965596 8.84879505 92.4335657 9.28865979 92.7705718 9.72852454 93.0084549 10.2508561 93.1472221 10.8556701 93.2859893 11.4604841 93.3553719 12.1340169 93.3553719 12.8762887L93.3553719 19 90.4016274 19 90.4016274 13.2474227C90.4016274 12.257727 90.2793819 11.5567031 90.0348873 11.1443299 89.7903927 10.7319588 89.3377541 10.5257732 88.6769578 10.5257732 88.4126393 10.5257732 88.1648444 10.5498279 87.9335657 10.5979381 87.702287 10.6460484 87.4941393 10.6975942 87.3091164 10.7525773L87.3091164 19 84.3553719 19z"
              />
              <path
                fill="#F69A6E"
                d="M11.8099174,3.63652893 C16.1232156,3.63652893 19.6198347,7.13314803 19.6198347,11.4464463 L19.6198347,11.4464463 L19.6198347,17.8563636 C19.6198347,18.6295623 18.9930334,19.2563636 18.2198347,19.2563636 L18.2198347,19.2563636 L11.8099174,19.2563636 C7.4966191,19.2563636 4,15.7597445 4,11.4464463 C4,7.13314803 7.4966191,3.63652893 11.8099174,3.63652893 Z M9.23277611,8.86930504 C7.8094603,10.2926208 7.8094603,12.6002717 9.23277611,14.0235875 C10.6560919,15.4469033 12.9637428,15.4469033 14.3870586,14.0235875 C15.8103744,12.6002717 15.8103744,10.2926208 14.3870586,8.86930504 C12.9637428,7.44598923 10.6560919,7.44598923 9.23277611,8.86930504 Z"
                transform="rotate(45 11.81 11.446)"
              />
            </g>
          </svg>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="/"
              className="block mt-4 text-lg lg:inline-block lg:mt-0 text-gray-700 hover:text-teal-400 mr-4"
            >
              Packages
            </a>
            <a
              href="/account"
              className="block mt-4 text-lg lg:inline-block lg:mt-0 text-gray-700 hover:text-teal-400 mr-4"
            >
              Account
            </a>
          </div>
          <div>
            <button
              onClick={handleLogout}
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white bg-black border-black hover:border-transparent hover:text-teal-400 hover:bg-white mt-4 lg:mt-0"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;