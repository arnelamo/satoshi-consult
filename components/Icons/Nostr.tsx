import { InternalIconProps } from "../Icon";

export const Nostr: React.FC<InternalIconProps> = ({
  height,
  width,
  fill,
  onMouseEnter,
  onMouseLeave,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 173 167"
    role="img"
    height={height}
    width={width}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <path
      d="M86.5 0.990601C40.9622 0.990601 4.04053 37.9531 4.04053 83.5413C4.04053 129.129 40.9622 166.092 86.5 166.092C132.038 166.092 168.96 129.129 168.96 83.5413C168.96 37.9531 132.038 0.990601 86.5 0.990601ZM133.855 64.5883C130.372 70.3837 123.27 74.3259 122.614 74.6629C121.284 75.3704 120.796 76.3981 120.881 77.9312C120.965 79.4643 120.594 87.0623 115.967 90.4149C113.594 92.1333 104.018 94.3571 99.6262 95.0984C97.3712 95.4858 96.8495 96.1766 95.6042 96.9178C93.9214 97.9624 87.9473 106.251 86.9376 108.087C87.0722 108.071 105.769 102.258 106.61 102.124C108.831 101.787 110.514 102.427 111.608 104.044C112.651 105.594 113.678 107.161 114.705 108.728C115.075 109.284 115.428 109.856 115.782 110.429L116.152 111.019C116.286 111.238 116.472 111.491 116.556 111.828C116.623 112.063 116.774 112.855 116.32 113.327C115.899 113.765 115.176 113.765 114.789 113.664C114.418 113.563 113.863 113.344 113.409 112.973L112.786 112.451C112.298 112.03 111.372 111.827 110.649 111.861C109.807 111.895 108.697 111.625 108.158 111.288C107.115 110.615 106.846 108.93 106.846 108.913C106.711 108.357 106.307 108.205 105.937 108.205C105.264 108.189 104.742 108.391 104.204 108.542C101.747 109.284 99.3065 110.042 96.8495 110.817L93.3324 111.912C91.599 112.451 89.8657 112.99 88.1492 113.563C87.678 113.714 87.2236 113.95 86.7356 114.203C86.5337 114.304 86.3317 114.405 86.1298 114.506C85.9278 114.607 85.7091 114.725 85.5071 114.843C85.0528 115.096 84.5647 115.365 84.0262 115.517C82.2761 116.039 80.7447 115.281 80.0211 113.529C79.5499 112.4 79.9706 110.16 80.223 109.503C81.8049 105.392 86.9544 97.6423 86.9544 97.5917C86.8702 97.558 81.2495 99.8155 80.324 100.523C77.7829 102.461 71.8256 107.043 71.7415 107.481C71.3544 109.519 70.0923 111.053 68.157 111.811C66.7602 112.35 65.9188 113.462 65.0942 114.54C65.0942 114.54 50.1674 135.127 49.1576 136.239C48.8547 136.576 46.0612 139.507 45.3208 140.872C45.1525 141.209 44.513 142.557 44.3447 142.894C44.2101 143.163 43.9072 143.887 42.7628 143.837C41.6185 143.786 41.5848 142.186 41.5344 141.495C41.4166 139.794 41.7868 138.126 42.6787 136.374C42.7628 136.205 43.7725 134.672 43.4023 133.442C43.0657 132.364 42.746 130.696 43.2509 129.854C44.0418 128.523 45.4386 128.472 47.3065 128.169C48.6023 127.95 49.5447 127.31 50.4534 125.979C52.3719 123.182 59.5913 112.923 61.2237 110.547C61.6612 109.924 61.9978 109.115 62.1492 108.323C62.6204 105.931 64.0677 104.263 66.5919 103.235C67.1304 103.016 77.177 94.6098 77.177 93.5316C77.177 92.7566 76.0832 92.3354 75.2418 92.0996C75.124 92.0659 68.8133 90.4317 65.9356 89.1176C64.3706 88.4101 63.1926 87.7867 61.7958 86.7759C59.8942 85.3776 56.091 86.0515 55.5356 86.1357C52.8431 86.5232 50.8405 87.7362 48.5687 89.2693C48.1648 89.5557 46.0949 90.2969 45.0515 89.7073C43.0153 88.5448 38.5389 86.4558 36.8897 83.9456C36.1324 82.7832 36.2334 80.8963 36.7719 78.8072C38.5052 73.9553 41.0632 71.782 45.792 70.4679C49.1576 69.3055 55.9395 69.0528 59.2042 68.8001C59.423 68.7327 66.6593 68.5642 71.7415 65.9529C75.124 64.2177 85.1706 57.5294 99.6262 57.9843C105.466 58.1696 116.505 63.8807 120.763 64.0492C125.105 64.2345 127.275 63.746 129.783 61.1515C130.49 60.4102 133.502 53.9073 130.658 50.3525C129.598 49.0385 128.504 47.8592 127.242 46.781C125.542 45.3321 123.775 43.9506 122.244 42.3165C118.861 38.728 117.818 33.8255 119.416 30.0013C120.443 27.3226 122.597 26.1601 125.71 26.7666C127.898 27.1878 129.497 29.1589 131.062 30.2034C131.937 30.7931 133.401 31.13 134.36 31.3659C135.572 31.6523 136.481 32.5789 136.43 33.2022C136.38 33.8256 134.781 34.3647 133.25 34.2467C131.432 34.1288 128.319 34.112 126.451 34.7353C125.205 35.1902 124.65 36.5716 125.02 37.9362C125.323 39.0481 127.696 41.0361 128.588 41.7774C130.372 43.2431 132.273 44.574 133.754 46.4103C135.42 48.4994 136.295 50.8748 136.565 53.5029C136.969 57.5294 135.908 61.1515 133.855 64.5883Z"
      fill={fill}
    />
  </svg>
);
