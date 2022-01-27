# Linked list

## What is a Linked list? 
Linked lists are described as linear data structures. They are made up of a series of nodes, where each element is its own separate object. Each node contains 2 parts:
- Its own data 
- A reference to the next item in the list.

```javascript
class Nodo {
	constructor(data) {
		this.value = data;
		this.next = null;
		this.before = null;
	}
}
```

## Types of linked lists.
While this article will focus on “singly” linked lists, it’s also worth mentioning that there are a few other types of linked lists, with each type having slightly different functionality.


### Singly linked list
Only has a next pointer and can only be traversed in sequence from the head to the end.

![](../../img/DS/singly_LinkedList.png)

A singly linked list whose nodes contain two fields: an integer value and a link to the next node

### Doubly linked list
Contains a reference to the next node and as well the previous node in the sequence.
![](../../img/DS/Doubly_LinkedList.png)

# Array vs Linked list

When we think of data structures one of the most common to come to mind might be an array. Also appearing in list-like structures where each element contains its own data, arrays are unsurprisingly often compared to linked lists. So what are the pros and cons of one over the other?


## Advantages of linked lists over arrays:
- Linked lists are dynamic and can be easily extended or reduced to accommodate the data set without reallocating or reorganizing the data structure itself.
- Its less expensive to maintain insertions or deletions.
- Can easily execute stacks and queues.
- Reduces access time.

## Disadvantages of linked lists over arrays:
- Cannot individually reference an element, needs to start at the head and follow the references until the item needing to be accessed is reached — Nodes must be read in order from beginning to end (sequential access).
- Uses more memory than an array, needing an extra 4 bytes to store the - reference to the next node.
- Access time is linear, commonly referred to as O(n).
- Difficulty for reverse traversing, although certain types of linked lists allow space for a “back pointer” to make this task easier.

## Do we actually need linked lists?
With all the different and seemingly more flexible types of data structures out there, you may be wondering what linked lists are actually used for. While they clearly have advantages with how they are stored in memory, accessing them can prove to be more cumbersome. While certainly not appropriate for every situation, real-world applications include:
- Accessing the previous and next page in the browser.
- Linking songs in a music list.
- Viewing previous or next images in an image viewer.
- Call stacks and queues.