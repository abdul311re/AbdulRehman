import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
const Main = styled.div`
.spline canvas{
  width :100% !important;
  height: ${(props) => props.height || '600px'} !important;
  pointer-events: none !important;
}
`
export default function Home() {
  const [splineApp, setSplineApp] = useState(null);

  // This function will be called once the Spline scene is loaded
  const handleLoad = (spline) => {
    setSplineApp(spline);
  };

  useEffect(() => {
    if (splineApp) {
      // Define the list of objects you want to resize
      const objectNames = ["Cube", "Sphere", "Group2"];

      // Loop through each object name and resize them
      objectNames.forEach((objectName) => {
        const obj = splineApp.findObjectByName(objectName);

        if (obj) {
          // Set the object's scale (adjust the values for size)
          obj.scale.x = 1; // Scale in x-direction (width)
          obj.scale.y = 1; // Scale in y-direction (height)
          obj.scale.z = 1; // Scale in z-direction (depth)
        }
      });
    }
  }, [splineApp]); // R
  
  return (
    <Main>
      <Spline
        scene="https://prod.spline.design/NanUy4SbQLugzG9E/scene.splinecode" 
        onLoad={handleLoad} // Call handleLoad when scene is loaded
        style={{
          width: '100%',
          height: '100%',
        }}
        class="spline"
        showLogo={false} // Set this prop to false to hide the logo
      />
    </Main>
  );
}
