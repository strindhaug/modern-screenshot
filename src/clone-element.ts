import { cloneSvg } from './clone-svg'
import {
  isCanvasElement,
  isIFrameElement,
  isImageElement,
  isSVGSVGElementNode,
  isVideoElement,
} from './utils'
import { cloneIframe } from './clone-iframe'
import { cloneCanvas } from './clone-canvas'
import { cloneVideo } from './clone-video'
import { cloneImage } from './clone-image'
import type { Context } from './context'

export function cloneElement<T extends HTMLElement | SVGElement>(
  node: T,
  context: Context,
): (HTMLElement | SVGElement) | Promise<HTMLElement | SVGElement> {
  if (isCanvasElement(node)) {
    return cloneCanvas(node)
  }

  if (isIFrameElement(node)) {
    return cloneIframe(node, context)
  }

  if (isImageElement(node)) {
    return cloneImage(node)
  }

  if (isVideoElement(node)) {
    return cloneVideo(node)
  }

  if (isSVGSVGElementNode(node)) {
    return cloneSvg(node, context)
  }

  return node.cloneNode(false) as T
}
