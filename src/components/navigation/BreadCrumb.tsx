import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import routes from "@/router/routes";
import { DataRouteObject, useLocation } from "react-router-dom";

function BreadCrumb() {
  const location = useLocation();
  const path = location.pathname.split('/').filter(p => p !== '');
  const root: DataRouteObject = routes.find(route => route.id === 'Root') as DataRouteObject;
  let actual: DataRouteObject = {} as DataRouteObject;
  root.children?.forEach((child) => {
    if (child.path === path[0]) {
      actual = {
        ...child,
        children: child.children?.filter(c => c.path === path[1])
      } as DataRouteObject
    }
  });

  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        
        {
          actual.children
          ? <>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-blue-500" href={`/${actual.path}`}>{actual.id}</BreadcrumbLink>
                {/* <BreadcrumbLink href={actual?.path}>{actual?.id}</BreadcrumbLink> */}
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="fill-current w-3 h-3 mx-3">
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
              </svg> */}
            </>
          : <BreadcrumbItem>
              <BreadcrumbPage className="text-gray-600">{actual?.id}</BreadcrumbPage>
            </BreadcrumbItem>
        }

        {actual.children?.map(({ id, path }, key) =>
          <BreadcrumbItem key={key}>
            {
              (key+1) === actual.children?.length
              // ? <BreadcrumbLink className="text-blue-500" href={path}>{id}</BreadcrumbLink>
              ? <BreadcrumbLink href={path}>{id}</BreadcrumbLink>
              : <BreadcrumbPage className="text-gray-600">{id}</BreadcrumbPage>
            }
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadCrumb;