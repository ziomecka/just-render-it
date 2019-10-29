export const componentDidMountQueue = [];

const enqueueScript = (componentScript: () => void): void => {
  componentDidMountQueue.push(componentScript);
};

export default {
  componentDidMountQueue,
  enqueueScript,
};
