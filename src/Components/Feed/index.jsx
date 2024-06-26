import { Fragment, useEffect } from "react";

// A resuable Component which shows data in a infinite scrollable list, uses renderProps as UI.
export const Feed = ({ list, onEndReached, keyExtractor, renderItem, renderFooter }) => {

    useEffect(() => {
      const onScroll = () => {
        if (window.innerHeight + window.scrollY >= window.document.body.offsetHeight - 32) {
          onEndReached();
        }
      }
      window.addEventListener('scroll', onScroll)
  
      return () => window.removeEventListener('scroll', onScroll);
    }, [onEndReached])
  
    return (
      <>
        <div className="feed-container" >
          {
            list.map((element, index) => (
              <Fragment key={keyExtractor(element, index)} >
                {renderItem(element, index)}
              </Fragment>
            ))
          }
        </div>
        <div className="feed-footer" >
          {
            renderFooter()
          }
        </div>
      </>
    )
  
  }
  