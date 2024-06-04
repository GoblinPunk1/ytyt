const telegram = window.Telegram.WebApp || {};

const defaultProps = {
  initData: '',
  initDataUnsafe: '',
  platform: '',
  expand() {},
};

export const telegramAPI = { ...defaultProps, ...telegram };
