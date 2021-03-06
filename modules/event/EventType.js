/**
 * @Author: Caven
 * @Date: 2020-04-10 17:02:28
 */

import { Cesium } from '@dc-modules/namespace'

const BaseEventType = {
  ADD: 'add',
  REMOVE: 'remove'
}

const MouseEventType = {
  CLICK: Cesium.ScreenSpaceEventType.LEFT_CLICK,
  RIGHT_CLICK: Cesium.ScreenSpaceEventType.RIGHT_CLICK,
  DB_CLICK: Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK,
  MOUSE_MOVE: Cesium.ScreenSpaceEventType.MOUSE_MOVE,
  WHEEL: Cesium.ScreenSpaceEventType.WHEEL,
  MOUSE_OVER: 'mouseover',
  MOUSE_OUT: 'mouseout'
}

const ViewerEventType = {
  ADD_LAYER: 'addLayer',
  REMOVE_LAYER: 'removeLayer',
  ADD_EFFECT: 'addEffect',
  REMOVE_EFFECT: 'removeEffect',
  CLICK: Cesium.ScreenSpaceEventType.LEFT_CLICK,
  RIGHT_CLICK: Cesium.ScreenSpaceEventType.RIGHT_CLICK,
  DB_CLICK: Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK,
  MOUSE_MOVE: Cesium.ScreenSpaceEventType.MOUSE_MOVE,
  WHEEL: Cesium.ScreenSpaceEventType.WHEEL
}

const SceneEventType = {
  CAMERA_MOVE_END: 'cameraMoveEnd',
  CAMERA_CHANGED: 'cameraChanged',
  PRE_UPDATE: 'preUpdate',
  POST_UPDATE: 'postUpdate',
  PRE_RENDER: 'preRender',
  POST_RENDER: 'postRender',
  MORPH_COMPLETE: 'morphComplete',
  CLOCK_TICK: 'clockTick'
}

const OverlayEventType = {
  ...BaseEventType,
  CLICK: Cesium.ScreenSpaceEventType.LEFT_CLICK,
  RIGHT_CLICK: Cesium.ScreenSpaceEventType.RIGHT_CLICK,
  DB_CLICK: Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK,
  MOUSE_MOVE: Cesium.ScreenSpaceEventType.MOUSE_MOVE,
  MOUSE_OVER: 'mouseover',
  MOUSE_OUT: 'mouseout',
  POSITION_UPDATE: 'positionUpdate'
}

const LayerGroupEventType = BaseEventType

const LayerEventType = {
  ...BaseEventType,
  CLICK: Cesium.ScreenSpaceEventType.LEFT_CLICK
}

const TrackEventType = {
  ...BaseEventType,
  POST_RENDER: 'postRender',
  ACTIVATE: 'activate',
  DEACTIVATE: 'deactivate',
  RESET_TIME_LINE: 'restTimeLine'
}

const PathEventType = {
  ...BaseEventType,
  POST_RENDER: 'postRender',
  RESET_TIME_LINE: 'restTimeLine'
}

const PlotEventType = {
  DRAW_START: 'drawStart',
  DRAW_STOP: 'drawStop',
  EDIT_START: 'editStart',
  EDIT_STOP: 'editEnd',
  DRAW_ANCHOR: 'drawAnchor',
  CREATE_ANCHOR: 'createAnchor',
  UPDATE_ANCHOR: 'updateAnchor',
  ANCHOR_MOVING: 'anchorMoving',
  EDIT_ANCHOR_STOP: 'editAnchorStop',
  CLEAR_ANCHOR: 'clearAnchor'
}

export {
  MouseEventType,
  ViewerEventType,
  SceneEventType,
  LayerGroupEventType,
  LayerEventType,
  OverlayEventType,
  TrackEventType,
  PathEventType,
  PlotEventType
}
