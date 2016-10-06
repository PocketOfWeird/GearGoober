export const listenToWindowEvent = (
  name, mapEventToAction, filter = (e) => true
) => {
  return (dispatch) => {
    const handleEvent = (e) => {
      if (filter(e)) {
        dispatch(mapEventToAction(e));
      }
    }

    window.addEventListener(name, handleEvent);

    // note: returns a function to unsubscribe
    return () => window.removeEventListener(name, handleEvent);
  };
}
