import "@fontsource/mulish/300.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/600.css";
import "@fontsource/mulish/700.css";

import "./index.scss";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import AppLayout from "Layout/AppLayout";
import Documents from "Modules/Documents";
import DocumentDetails from "Modules/DocumentDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<AppLayout fluidHeader firstTimeUser={false} />}
      errorElement={
        <AppLayout fluidHeader firstTimeUser={false}>
          <p>Error Not Found!</p>
        </AppLayout>
      }
    >
      <Route path="documents" element={<Documents />}></Route>
      <Route path="documents/upload" element={<DocumentDetails newUpload />} />
      <Route path="documents/:id" element={<DocumentDetails />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
