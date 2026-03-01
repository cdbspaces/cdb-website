import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanity'

const builder = imageUrlBuilder(client)

export function urlForImage(source: any, width?: number, height?: number) {
    let imageBuilder = builder.image(source).auto('format').format('webp')

    if (width) {
        imageBuilder = imageBuilder.width(width)
    }

    if (height) {
        imageBuilder = imageBuilder.height(height)
    }

    return imageBuilder.url()
}
