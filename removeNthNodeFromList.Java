//Given the head of a linked list, remove the nth node from the end of the list and return its head.

class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
                //Approach: Using Two Pointers Algorithm, T.C: O(n)
        //base case
        if (head == null || head.next == null) return null;
        //we need a dummy node for helping to return the ans
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        //initialize our two pointers
        ListNode left = dummy;
        ListNode right = head;

        //first loop to move the right pointer from left to right
        while(n>0 && right!=null){
            right = right.next;
            n-=1;
        }
        //now shift both our pointers
        while(right!=null){
            right = right.next;
            left = left.next;
        }
        //so, left pointer will be the nth node which we have to remove
        left.next = left.next.next;

        //return the output
        return dummy.next;
    }
}