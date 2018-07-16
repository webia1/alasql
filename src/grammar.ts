import grammar from './alasqlparser';
import base from './grammar/base';
import statements from './grammar/statements';
import select from './grammar/select';
import expression from './grammar/expression';
import exists from './grammar/exists';
import defcols from './grammar/defcols';
import from_ from './grammar/from';
import compile from './grammar/compile';
import where from './grammar/where';

export default mem => {
	mem.alasql.parser = grammar;
	base(mem);
	statements(mem);
	select(mem);
	expression(mem);
	exists(mem);
	defcols(mem);
	from_(mem);
	compile(mem);
	where(mem);
};
