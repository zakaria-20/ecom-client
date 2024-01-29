import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadCrumb() {
  return (
    <Breadcrumb className='p-0'>
      <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadCrumb;