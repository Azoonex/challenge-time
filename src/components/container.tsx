import React, { useRef } from 'react'
import Button from './utils/button'
import Input from './utils/input';
import { typeNewProject } from '../App';

interface TypePropsContainer {
  handleAddNewProject: (value: typeNewProject) => void
}

function Container(props: TypePropsContainer) {

  const { handleAddNewProject } = props

  const nameInput = useRef < null | HTMLInputElement > (null);
  const comment = useRef < null | HTMLInputElement > (null);
  const descreiption = useRef < null | HTMLInputElement > (null);

  function hanldeSubmit(e:
    React.FormEvent<HTMLInputElement>
  ) {
    e.preventDefault()
    if (nameInput.current.value.length > 0) {
      handleAddNewProject({
        comment: comment.current.value,
        des: descreiption.current.value,
        id: new Date(),
        name: nameInput.current.value
      })
    }
    nameInput.current.value = "";
    comment.current.value = "";
    descreiption.current.value = ""
  }

  return (
    <form onSubmit={(e) => hanldeSubmit(e)}>
      <section className='p-3 flex flex-col gap-3 rounded-xl shadow-lg border-gray-100 '>
        <Input
          ref={nameInput}
          label='NamePoject'
          name='nameInput'
          placeholder='name'
          type={"text"}
        />
        <Input
          ref={comment}
          label='comment'
          name='comment'
          placeholder='comment'
          area={true}
        />
        <Input
          ref={descreiption}
          label='Descriptioin'
          name='des'
          placeholder='des'
          type={'text'}
        />
        <Button>
          Add +
        </Button>
      </section>
    </form>
  )
}

export default Container