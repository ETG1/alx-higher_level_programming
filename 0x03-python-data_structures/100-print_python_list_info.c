#include <python.h>

/**
 * 100-print_python_list_info - Prints basic info about Python lists.
 * @p: A PyObject list.
 */

void print_python_list_info(PyObject *p)
{
	int size, alloc, e;
	PyObject *obj;

	size = Py_SIZE(p);
	alloc = ((PyListObject *)p)->allocated;

	printf("[*] Size of the Python List = %d\n", size);
	printf("[*] Allocated = %d\n", alloc);

	for (e = 0; e < size; e++)
	{
		printf("Element %d: ", e);

		obj = PyList_GetItem(p, e);
		printf("%s\n", Py_TYPE(obj)->tp_name);
	}
}

