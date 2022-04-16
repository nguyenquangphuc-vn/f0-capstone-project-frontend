import { AxiosResponse } from 'axios'
import api from '..'
import {
  EBandwidthNetworkInterface,
  EBandwidthTrafficDirection,
  IMonitoringResponse
} from '../../types/digitalOcean/monitoring'

const BASE_PATH = '/do-api/monitoring'

export async function getMonitoringBandwidth(
  hostId: string,
  start: Date,
  end: Date,
  netWorkInterface: EBandwidthNetworkInterface,
  trafficDirection: EBandwidthTrafficDirection
): Promise<IMonitoringResponse> {
  const stringStartDate = start.toDateString()
  const stringEndDate = end.toDateString()

  const response: AxiosResponse = await api.get(
    `${BASE_PATH}/metrics/bandwidth?hostId=${hostId}&start=${stringStartDate}&end=${stringEndDate}&networkInterface=${netWorkInterface}&trafficDirection=${trafficDirection}`
  )

  return response?.data
}
