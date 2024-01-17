export interface TreeNode {
  id: number;
  name: string;
  spouse?: string;
  children?: TreeNode[];
}
