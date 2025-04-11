import OrderConfirmation from '@/components/Orders/OrderConfirmation';
import React from 'react';

const page = ({ params }) => {
  return (
    <div>
      <OrderConfirmation orderId={params.id} />
    </div>
  );
};

export default page;
