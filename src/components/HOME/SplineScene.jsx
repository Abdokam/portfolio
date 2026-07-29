import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function SplineScene({ scene, className }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}