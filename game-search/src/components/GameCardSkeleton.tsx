import { Card, Skeleton, CardBody, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
   <Card>
     <Skeleton  width='300px' height="200px"/>
     <CardBody>
       <SkeletonText />
     </CardBody>
   </Card>
  )
}

export default GameCardSkeleton