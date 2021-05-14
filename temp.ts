interface TreeNode extends Record<string, any> {
  id: number;
  parentId: number;
  name: string;
  children?:TreeNode[]
}

function printTree(list: TreeNode[]): void {
  let top=null
  for(let i=0;i<list.length;i++){
    if(!list[i].parentId){
      top=list[i]
    }
    for(const item of list){
      if(list[i].parentId===item.id){
        if(item.children){
          item.children.push(list[i])
        }else{
          item.children=[list[i]]
        }
      }
     }
   }

const log=(node:TreeNode,depth)=>{
  // 用数字代替空格了
   console.log(depth,node.name)
  if(node.children){
    for(const item of node.children){
      log(item,depth+1)
    }
  }
}
log(top,0)
}

//============= 测试代码 ==============
const list: TreeNode[] = [
  { id: 1001, parentId: 0, name: 'AA' },
  { id: 1002, parentId: 1001, name: 'BB' },
  { id: 1003, parentId: 1001, name: 'CC' },
  { id: 1004, parentId: 1003, name: 'DD' },
  { id: 1005, parentId: 1003, name: 'EE' },
  { id: 1006, parentId: 1002, name: 'FF' },
  { id: 1007, parentId: 1002, name: 'GG' },
  { id: 1008, parentId: 1004, name: 'HH' },
  { id: 1009, parentId: 1005, name: 'II' },
];

printTree(list);