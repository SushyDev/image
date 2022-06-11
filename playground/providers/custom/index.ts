import { joinURL } from 'ufo'
import type { ProviderGetImage } from '../../../src/types' // '@sushydev/image'

export const getImage: ProviderGetImage = (src, { modifiers = {}, baseURL = '/' } = {}) => {
  const operationsString = `w_${modifiers.width}&h_${modifiers.height}`
  return {
    url: joinURL(baseURL, operationsString, src)
  }
}
