const Logger = {
  info(message: string, content: any) {
    console.log(message, content);
  },
  error(message: string, error: any) {
    console.warn(message, error);
  },
};

export default Logger;
