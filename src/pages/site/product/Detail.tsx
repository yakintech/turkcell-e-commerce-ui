import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

//  const PROTO_PATH = 'product.proto'
 
// const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
//     keepCase: true,
//     longs: String,
//     enums: String,
//     defaults: true,
//     oneofs: true
// });
// const productProto = (grpc.loadPackageDefinition(packageDefinition) as any).product;

// const client = new productProto.ProductService(
//     'localhost:50051',
//     grpc.credentials.createInsecure()
// )

function Detail() {

    const { id } = useParams()

    useEffect(() => {


        // client.getProductById({ _id: id }, (err: any, response: any) => {
        //     console.log(response)
        // })

    }, [])


    return (
        <div>Detail</div>
    )
}

export default Detail