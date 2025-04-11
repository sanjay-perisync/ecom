import React from 'react'
import ViewFullInfo from '@/components/Orders/ViewFullInfo'

export default function Page({ params }) {
  return <ViewFullInfo orderId={params.id} />;
}