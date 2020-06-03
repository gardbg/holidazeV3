import React, { useState, useEffect, useRef } from 'react'

export default function Map({ options, onMount, className, onMountProps, googleLong, googleLat }) {
  const ref = useRef()
  const [map, setMap] = useState()

  const coords = { lat: parseFloat(googleLat), lng: parseFloat(googleLong) };

  options.center = coords;

  useEffect(() => {
    const onLoad = () => setMap(new window.google.maps.Map(ref.current, options))

    if (!window.google) {
      const script = document.createElement(`script`)
      script.src =
        `https://maps.googleapis.com/maps/api/js?key=AIzaSyCRNK-3euC2kY-3P2YLlMqSSlpnYP56hq4`
      document.head.append(script)
      script.addEventListener(`load`, onLoad)
      return () => script.removeEventListener(`load`, onLoad)
    } else onLoad()
  }, [options])
  if (map && typeof onMount === `function`) {
    onMount(map, onMountProps);
  }
  return (
    <div
      style={{ height: `25vh`, margin: `1em 0`, borderRadius: `0.5em` }}
      {...{ ref, className }}
    />
  )
}
Map.defaultProps = {
  options: {
    center: { lat: 48, lng: 8 },
    zoom: 13,
  },
}
