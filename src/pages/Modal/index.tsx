
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useCallback, useState } from "react";
import Button from '@atlaskit/button';
import Modal, {ModalBody, ModalFooter, ModalHeader, ModalTitle, ModalTransition } from "@atlaskit/modal-dialog";
import Image from "next/image";
import { api } from "@api/index";


type Event = {
  name:string;
  thumbnail:string;
  initial_date:string;
  final_date:string;
  local: {
    city: string;
    uf: string;
    place: string;
  };
  description: string;


}

const ModalPage:NextPage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);



    return (
      <>
      <Button appearance="primary" onClick={openModal}>
        Open modal
      </Button>

      <ModalTransition>

          <Modal onClose={closeModal}>
            <ModalHeader>
              <ModalTitle>Duplicate this page</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <div className="ExtendedEventInfo">
                <Image src={}></Image>

              </div>
              Duplicating this page will make it a child page of{' '}
              <span>Search - user exploration</span>, in the{' '}
              <span>Search e Smarts</span> space.
            </ModalBody>
            <ModalFooter>
              <Button appearance="subtle">Cancel</Button>
              <Button appearance="primary" onClick={closeModal} autoFocus>
                Duplicate
              </Button>
            </ModalFooter>
          </Modal>

      </ModalTransition>
    </>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 2,
      _sort: 'published_at',
      _order: 'desc'
    }
  });

  const paths = data.map(episode => {
    return {
      params: {
        slug: episode.id,
      }
    }
  })


  return {
    paths,
    fallback: 'blocking'
  }
}


export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;

  const { data } = await api.get(`/episodes/${slug}`);

  const episode = {
    id: data.id,
    title: data.title,
    thumbnail: data.thumbnail,
    member: data.members,
    publishedAt: format(parseISO(data.published_at), 'd MMM yy', {locale: ptBR}),
    duration: Number(data.file.duration),
    durationAsString: convertDurationToTimeString(Number(data.file.duration)),
    description: data.description,
    url: data.file.url,
  };

  return { 
    props: {
      episode
    },
    revalidate: 60 * 60 * 24 // 24h
  }

}


export default ModalPage