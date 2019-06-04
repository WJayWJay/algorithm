

#define BLACK 1
#define RED 0
#include <iostream>

using namespace std;

class bst {
    private: 
        struct Node
        {
            int value;
            bool color;
            Node *leftTree, *rightTree, *parent;

            Node(): value(0), color(RED), leftTree(NULL), rightTree(NULL), parent(NULL) {}

            Node* grandparent() {
                if (parent == NULL) {
                    return NULL;
                }

                return parent->parent;
            }

            Node* uncle() {
                if (grandparent() == NULL) {
                    return NULL;
                }
                if (parent == grandparent()->rightTree) {
                    return grandparent()->leftTree;
                } else {
                    return grandparent()->rightTree;
                }
            }

            Node* sibling() {
                if (parent->leftTree == this) {
                    return parent->rightTree;
                } else {
                    return parent->leftTree;
                }
            }
        };
        
        void rotate_right(Node *p) {
            Node *gp = p->grandparent();
            Node *fa = p->parent;
            Node *y = p->rightTree;

            fa->leftTree = y;
            if (y!= NIL) {
                y->parent = fa;
            }
            p->rightTree = fa;

            if (root == fa) {
                root = p;
            }

            p->parent = gp;
            if (gp != NULL) {
                if (gp->leftTree == fa) {
                    gp->leftTree = p;
                } else {
                    gp->rightTree = p;
                }
            }
        }

        void rotate_left(Node* p) {
            if (p->parent == NULL) {
                root = p;
                return;
            }
            Node *gp = p->grandparent();
            Node *fa = p->parent;
            Node *y = p->leftTree;

            fa->rightTree = y;

            if (y != NIL) {
                y->parent = fa;
            }

            p->leftTree = fa;
            fa->parent = p;
            if (root == fa) {
                root = p;
            }
            p->parent = gp;

            if(gp != NULL) {
                if (gp->leftTree == fa)
                    gp->leftTree = p;
                else 
                    gp->rightTree = p;
            }
        }

        void insert(Node *p, int data) {
            if (p->value>= data) {
                if (p->leftTree != NIL) {
                    insert(p->leftTree, data); // 递归往左子树以下 寻找合适的数据插入点
                } else {
                    Node *tmp = new Node();
                    tmp->value = data;
                    tmp->leftTree = tmp->rightTree = NIL;
                    tmp->parent = p;
                    p->leftTree = tmp;
                    insert_case(tmp);
                }
            } else {
                if (p->rightTree != NIL) {
                    insert(p->rightTree, data);
                } else {
                    Node *tmp = new Node();
                    tmp->value = data;
                    tmp->leftTree = tmp->rightTree = NIL;
                    tmp->parent = p;
                    p->rightTree = tmp;
                    insert_case(tmp);
                }
            }
        }

        void insert_case(Node *p) {
            if (p->parent == NULL) {
                root = p;
                p->color = BLACK;
                return;
            }
            if (p->parent->color == RED) {
                if (p->uncle()->color == RED) {
                    p->parent->color = p->uncle()->color = BLACK;
                    p->grandparent()->color = RED;
                    insert_case(p->grandparent());
                } else {
                    if (p->parent->rightTree == p && p->grandparent()->leftTree == p->parent) {
                         rotate_left(p);
                         rotate_right(p);
                         p->color = BLACK;
                         p->leftTree->color = p->rightTree->color = RED;
                    } else if (p->parent->leftTree == p && p->grandparent()->rightTree == p->parent) {
                        rotate_right(p);
                        rotate_left(p);
                        p->color = BLACK;
                        p->leftTree->color = p->rightTree->color = RED;
                    } else if (p->parent->leftTree == p && p->grandparent()->leftTree == p->parent) {
                        p->parent->color = BLACK;
                        p->grandparent()->color = RED;
                        rotate_right(p->parent);
                    } else if ( p-> parent->rightTree == p && p->grandparent()->rightTree == p->parent ) {
                        p->parent->color = BLACK;
                        p->grandparent()->color = RED;
                        rotate_left(p->parent);
                    }
                }
            }
        }
    
        void DeleteTree(Node* p) {
            if (!p || p == NIL) {
                return ;
            }
            DeleteTree(p->leftTree);
            DeleteTree(p->rightTree);
        }
    public:

        bst() {
            // NIL 是叶子节点根树
            NIL = new Node();
            NIL->color = BLACK;
            root = NULL;
        }

        ~bst() {
            if(root) {
                DeleteTree(root);
            }
            delete NIL;
        }

        void inorder() {
            if(root == NULL) {
                return;
            }
            inroder(root);
            cout<<endl;
        }

        void insert(int x) {
            if (root == NULL) {
                root = new Node();
                root->color = BLACK;
                root->leftTree = root->rightTree = NIL;
                root->value = x;
            } else {
                insert(root, x);
            }
        }

        bool delete_value(int data) {
            return delete_child(root, data);
        }
    private:
        Node *root, *NIL;
};