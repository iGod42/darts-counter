import outs from './outs.json'

export const getOutshots = (nr) => (outs.find(out => out.nr === nr) || {outs: []}).outs
