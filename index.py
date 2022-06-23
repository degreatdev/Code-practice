print("2+2-(5*5)")
sum_in_array = ["GOOGLE", "AMAZON", "CISCO"]

x,y,z = 23,2,4
print(x+y+z)
if (x>4):
    print("greater than")
else:
    print("less than")

#LIST IN PYTHON
companies_in_tech = ["GOOGLE","AMAZON","TESLA"]
#prints command
print(companies_in_tech[1]) #prints >> GOOGLE
print(companies_in_tech[-1]) #prints >> TESLA
print(companies_in_tech[-2]) #prints >> AMAZON

list_of_random_things = [1, 3.4, 'a string', True]
list_of_random_things[0] #prints 1

#However, you can retrieve the last element by reducing the index by 1.
#Therefore, you can do the following:
list_of_random_things[len(list_of_random_things) - 1]
#prints True

#SLICE AND DICE
list_of_random_things = [1, 3.4, 'a string', True]
list_of_random_things[1:2]
#prints >> [3.4]

list_of_random_things[:2]
#prints >> [1, 3.4]

list_of_random_things[1:]
# prints >> [3.4, 'a string', True]

#MEMBERSHIP OPERATOR: "in" or "not in"
greeting = "Hello there"
print("there" in greeting) # "in" checks if the object is included in "greeting"
#prints >> True

greeting = "Hello there"
print("love" not in greeting) # "not in" checks if the object is included in "greeting"
#prints >> True

'this' in 'this is a string'
#prints >> True
'in' in 'this is a string'
#prints >> True
'isa' in 'this is a string'
#prints >> False
5 not in [1, 2, 3, 4, 6]
#prints >> True
5 in [1, 2, 3, 4, 6]
#prints >> False


#Using Lists in the Index Fund Example
VINIX = ['C', 'MA', 'BA', 'PG', 'CSCO', 'VZ', 'PFE', 'HD', 'INTC',
        'T', 'V', 'UNH', 'WFC', 'CVX', 'BAC', 'JNJ', 'GOOGL', 'GOOG', 'BRK.B',
        'XOM', 'JPM', 'FB', 'AMZN', 'MSFT', 'AAPL']

    print(VINIX[0])
    #prints >> "C"
    print(VINIX[1])
    #prints >> 'MA'
